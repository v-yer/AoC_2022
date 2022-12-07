import {parseProcedure} from "../parseProcedure";
import {testProcedures} from "../input";

describe('parseProcedure', () => {
  const scenarios: [string, { numOfMoves: number, from: number, to: number }][] =
    [
      [testProcedures[0], {numOfMoves: 1, from: 2, to: 1}],
      [testProcedures[1], {numOfMoves: 3, from: 1, to: 3}],
      [testProcedures[2], {numOfMoves: 2, from: 2, to: 1}],
      [testProcedures[3], {numOfMoves: 1, from: 1, to: 2}],
    ];

  it.each(scenarios)(
    'Should return parsed procedure',
    (input, expected) => {
      expect(parseProcedure(input)).toStrictEqual(expected);
    },
  );
});
