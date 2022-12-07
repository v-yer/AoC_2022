import {Input} from "./input";
import {rearrange} from "./rearrange";

export const rearrangeInputPt1 = (localInput: Input, procedures: string[]) => {
  procedures.forEach(procedure => rearrange(procedure, localInput))
  return localInput
}
