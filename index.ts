/**
 * Prompts user for input in the terminal and returns the input as a string.
 * @async
 * @param prompt - The prompt message to display to the user.
 * @returns A promise that resolves to the user's input as a string.
 * @example
 * ```js
 * const input = require('terminput')
 * 
 * const name = await input('What is your name? ')
 * console.log(`Hello, ${name}!`)
 * ```
 */

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
