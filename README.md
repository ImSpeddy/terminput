# raw-input

Raw input inspired on Python's `input()` function, intended to get easier input from the user.

## Install

From **NPM**:

`npm i raw-input`

## Syntax

`await input(prompt: string)`

#

`prompt: string`: Prompt for the input, Optional

#

## Example

```
const input = require('raw-input')

async function getInput() {
    const myInput = await input(); // Retrieves first input, no prompt
    console.log(myInput); // Outputs the input

    const mySecondInput = await input("Enter your name: "); // Retrieves the input, asking for a name
    console.log(mySecondInput); // Outputs the input
}

getInput();

```
