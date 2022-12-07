import {Input} from "./input";
import {parseProcedure} from "./parseProcedure";

export const rearrange = (procedure: string, localInput: Input) => {
  const {numOfMoves, from, to} = parseProcedure(procedure)
  console.log({procedure}, {numOfMoves}, {from}, {to})

  for (let i = 0; i < numOfMoves; i++) {
    const getItemFrom = localInput[from].pop()
    if (getItemFrom) {
      localInput[to].push(getItemFrom)
    }
  }
}
