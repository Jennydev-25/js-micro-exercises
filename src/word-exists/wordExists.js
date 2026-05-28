export function wordExists(str) {
  const normalizedStr = str.toLowerCase();
  const containsEnglish = normalizedStr.includes('english');
  return containsEnglish;
}