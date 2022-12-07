import {Input} from "./input";
import {parseProcedure} from "./parseProcedure";

export const rearrange2 = (procedure: string, localInput: Input) => {
  const {numOfMoves, from, to} = parseProcedure(procedure)

  const getItemsFrom = localInput[from].slice(-numOfMoves)
  localInput[from].splice(-numOfMoves)
  localInput[to] = localInput[to].concat(getItemsFrom);
  return localInput;
}
