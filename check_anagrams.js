// function to check if two strings are anagrams
function areAnagrams(str1, str2) {
  // check if lengths are equal or not
  if (str1.length !== str2.length) {
    return false;
  }

  // create a frequency map for characters in str1
  const charCount = {};
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  //check the characters in str2 against the frequency map and decrement the count
  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  };
  return true;
};