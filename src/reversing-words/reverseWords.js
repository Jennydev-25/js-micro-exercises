export function reverseWords(str) {
  return str.trim().split(' ').filter(word => word !== '').reverse().join(' ');
}