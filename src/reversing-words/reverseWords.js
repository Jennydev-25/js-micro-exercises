export function reverseWords(str) {
  const trimmed = str.trim();
  const words = trimmed.split(' ');
  const reversed = words.reverse();
  return reversed.join(' ');
}