import {Input} from "./input";

export const reverseInputs = (inputToReverse: Input) => {
  for (const [_, items] of Object.entries(inputToReverse)) {
    items.reverse()
  }

  return inputToReverse;
}
