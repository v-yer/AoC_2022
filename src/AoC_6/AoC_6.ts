export const checkUniqueCharsInStrng = (input: string) => {
  const helper = [...input].reduce((acc, curr) => {
    return acc.includes(curr) ? acc : acc + curr;
  }, '');
  return helper.length === input.length;
};

export const getLastUniquePosition = (
  input: string,
  lengthOfSubstring: number,
) => {
  for (let i = 0; i < input.length - lengthOfSubstring; i++) {
    const endPosition = i + lengthOfSubstring;
    const substring = input.substring(i, endPosition);

    if (checkUniqueCharsInStrng(substring)) {
      return endPosition;
    }
  }
};

export const getStartOfPacketMarker = (input: string) => {
  return getLastUniquePosition(input, 4);
};

export const getStartOfMessageMarker = (input: string) => {
  return getLastUniquePosition(input, 14);
};
