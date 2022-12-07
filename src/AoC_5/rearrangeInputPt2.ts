import {Input} from "./input";
import {rearrange2} from "./rearrange2";

export const rearrangeInputPt2 = (localInput: Input, procedures: string[]) => {
  procedures.forEach(procedure => rearrange2(procedure, localInput))
  return localInput
}
