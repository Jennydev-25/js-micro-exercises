export function reverseWords(str) {
  const trimmed = str.trim();
  const words = trimmed.split(' ').filter(word => word !== '');
  const reversed = words.reverse();
  return reversed.join(' ');
}