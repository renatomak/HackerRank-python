/* 
Two words are anagrams when both strings contain exactly 
the same letters at the exact same frequency.
inputs: two strings
Constraints: The strings  and  consist of lowercase 
English alphabetic letters, ascii[a-z].
return: int: the minimum total characters that must be deleted
*/

const countOccurences = (array, value) =>
  array.reducer((acc, item) => (item === value ? acc + 1 : acc), 0);

const makeAnagram = (a, b) => {
  const commonLetters = [];
  const arrayA = a.split('');
  const arrayB = b.split('');

  if (a.length >= b.length) {
    for (let i = 0; i < a.length; i += 1) {
      if (arrayB.includes(a[i])) {
        const indexA = arrayA.indexOf(a[i]);
        const indexB = arrayB.indexOf(a[i]);

        if (indexA > -1) arrayA.splice(indexA, 1);
        if (indexB > -1) arrayB.splice(indexB, 1);
        commonLetters.push(a[i]);
      }
    }
  } else {
    for (let i = 0; i < b.length; i += 1) {
      if (arrayA.includes(b[i])) {
        const indexA = arrayA.indexOf(b[i]);
        const indexB = arrayB.indexOf(b[i]);

        if (indexA > -1) arrayA.splice(indexA, 1);
        if (indexB > -1) arrayB.splice(indexB, 1);
        commonLetters.push(b[i]);
      }
    }
  }

  const deletedQuantity = arrayB.length + arrayA.length;

  return deletedQuantity;
};

const result = makeAnagram('cde', 'abc');
// // const result = makeAnagram(
//   'fcrxzwscanmligyxyvym',
//   'jxwtrhvujlmrpdoqbisbwhmgpmeoke'
// );

console.log(result);
