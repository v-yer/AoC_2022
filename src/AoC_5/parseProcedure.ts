export const parseProcedure = (procedure: string) => {
  const split = procedure.split(' ')
  const numOfMoves = Number(split[1])
  const from = Number(split[3])
  const to = Number(split[5])

  return {
    numOfMoves,
    from,
    to
  }
}
