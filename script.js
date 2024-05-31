function firstNonRepeatedChar(str) {
  // Create a frequency map to store the count of each character
  const frequencyMap = {};

  // Populate the frequency map
  for (let char of str) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  // Iterate over the string to find the first non-repeated character
  for (let char of str) {
    if (frequencyMap[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

// Testing the function
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
