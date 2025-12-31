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


// Explanation of time and space complexity:

// TIME COMPLEXITY:
//  a. length check: O(1) - This operation takes constant time.
//  b. building frequency map: O(n) - We iterate through str1 once, where n is the length of str1.
//  c. checking str2 against frequency map: O(n) - We iterate through str2 once, where n is the length of str2.
// Overall time complexity: O(n) + O(n) + O(1) = O(n)

// SPACE COMPLEXITY:
//  a. frequency map: O(k) - In the worst case, we may store all unique characters from str1 in the frequency map, 
// where k is the number of unique characters.
// Overall space complexity: O(k)


// if the character set is fixed and small (like lowercase English letters), we can use an array of fixed size (26) 
// instead of a dynamic object for the frequency map, which would reduce the space complexity to O(1).