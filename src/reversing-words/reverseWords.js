export function reverseWords(str) {
  const words = str.split(' ');
  const reversed = words.reverse();
  const result = reversed.join(' ');
  return result;
}