module.exports = async function (prompt: string) {
  if (prompt) {
    process.stdout.write(prompt);
  }
  return new Promise((resolve) => {
    const onData = (data: Buffer) => {
      process.stdin.removeListener("data", onData);
      process.stdin.pause();
      resolve(data.toString().trim());
    };
    process.stdin.on("data", onData);
    process.stdin.resume();
  });
};
