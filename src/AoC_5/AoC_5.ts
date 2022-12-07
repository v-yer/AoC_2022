import {Input} from "./input";
import {rearrangeInputPt1} from "./RearrangeInputPt1";
import {getMessage} from "./getMessage";
import {rearrangeInputPt2} from "./rearrangeInputPt2";
import {reverseInputs} from "./reverseInputs";

export const rearrangeAndGetMessagePt1 = (input: Input, procedures: string[]) => {
  const sortedInputs = reverseInputs(input)
  const rearrangedPuzzleInput = rearrangeInputPt1(sortedInputs, procedures)
  return getMessage(rearrangedPuzzleInput)
}

export const rearrangeAndGetMessagePt2 = (input: Input, procedures: string[]) => {
  const sortedInputs = reverseInputs(input)
  const rearrangedPuzzleInput = rearrangeInputPt2(sortedInputs, procedures)
  return getMessage(rearrangedPuzzleInput)
}

