import {Input, puzzleInput, puzzleProcedures, testInput, testProcedures} from "../input";
import {rearrangeAndGetMessagePt1, rearrangeAndGetMessagePt2} from "../AoC_5";

describe('rearrangeAndGetMessagePt1', () => {
  const scenarios: [Input, string[], string][] =
    [
      [testInput, testProcedures, 'CMZ'],
      [puzzleInput, puzzleProcedures, 'RFFFWBPNS'],
    ];

  it.each(scenarios)(
    'Should return message of rearranged input pt. 1',
    (input, procedures, expected) => {
      expect(rearrangeAndGetMessagePt1(input, procedures)).toStrictEqual(expected);
    },
  );
});

describe('rearrangeAndGetMessagePt2', () => {
  const scenarios: [Input, string[], string][] =
    [
      [testInput, testProcedures, 'MCD'],
      [puzzleInput, puzzleProcedures, 'CQQBBJFCS'],
    ];

  it.each(scenarios)(
    'Should return message from rearranged input pt. 2',
    (input, procedures, expected) => {
      expect(rearrangeAndGetMessagePt2(input, procedures)).toStrictEqual(expected);
    },
  );
});
