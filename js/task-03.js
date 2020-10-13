// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function (string) {
  let words = string.split(" ");
  let longestWords = words[0];

  // for (const word of words) {
  //   if (longestWords.length < word.length) {
  //     longestWords = word;
  //   }
  // }
  for (let i = 1; i < words.length; i += 1) {
    if (longestWords.length < words[i].length) {
      longestWords = words[i];
    }
  }
  return longestWords;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
