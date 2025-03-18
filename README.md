# TermInput

Raw input inspired on Python's `input()` function, intended to get easier input from the user.

## Install

From **NPM**:

`npm i terminput`

## Syntax

```await TermInput(prompt: string) // Returns a string with an input provided by the user```

#

`prompt: string`: Prompt for the input, Optional

#

## Example

```
const input = require('terminput')

async function getInput() {
    const myInput = await input(); // Retrieves first input, no prompt
    console.log(myInput); // Outputs the input

    const mySecondInput = await input("Enter your name: "); // Retrieves the input, asking for a name
    console.log(mySecondInput); // Outputs the input
}

getInput();

```
