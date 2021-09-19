/* 
Two words are anagrams when both strings contain exactly 
the same letters at the exact same frequency.
inputs: two strings
Constraints: The strings  and  consist of lowercase 
English alphabetic letters, ascii[a-z].
return: int: the minimum total characters that must be deleted
*/

const makeAnagram = (a, b) => {
  const commonLetters = [];
  const arrayA = a.split('');
  const arrayB = b.split('');

  if (a.length >= b.length) {
    [...a].forEach((item) => {
      if (arrayB.includes(item)) {
        const indexA = arrayA.indexOf(item);
        const indexB = arrayB.indexOf(item);

        if (indexA > -1) arrayA.splice(indexA, 1);
        if (indexB > -1) arrayB.splice(indexB, 1);
        commonLetters.push(item);
      }
    });
  } else {
    [...b].forEach((item) => {
      if (arrayA.includes(item)) {
        const indexA = arrayA.indexOf(item);
        const indexB = arrayB.indexOf(item);

        if (indexA > -1) arrayA.splice(indexA, 1);
        if (indexB > -1) arrayB.splice(indexB, 1);
        commonLetters.push(item);
      }
    });
  }

  const deletedQuantity = arrayB.length + arrayA.length;

  return deletedQuantity;
};

const result = makeAnagram('', 'abc');
// RESPOSTA 4

// const result = makeAnagram(
//   'fcrxzwscanmligyxyvym',
//   'jxwtrhvujlmrpdoqbisbwhmgpmeoke'
// );
// RESPOSTA 30

console.log(result);

module.exports = makeAnagram;
