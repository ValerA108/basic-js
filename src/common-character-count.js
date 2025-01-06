const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // создаю два объекта countS1 и countS2 для строк s1 и s2 соответственно. В этих объектах хранится количество каждого символа.
  const countS1 = {};
  const countS2 = {};

  // Заполняем объект для строки s1(перебираем символы и увеличиваем счетчик для каждого символа в countS1)
  for (let char of s1) {
    countS1[char] = (countS1[char] || 0) + 1;
  }

  // Заполняем объект для строки s2(перебираем символы и увеличиваем счетчик для каждого символа в countS2)
  for (let char of s2) {
    countS2[char] = (countS2[char] || 0) + 1;
  }

  // Теперь считаем количество общих символов
  let commonCount = 0;

  // Для каждого символа в countS1, проверяем, есть ли он в countS2( Если этот символ присутствует в countS2, то прибавляем минимальное значение из двух объектов (это количество общих символов этого типа))
  for (let char in countS1) {
    if (countS2[char]) {
      // Если есть, прибавляем минимальное количество из обеих строк(Используем Math.min(countS1[char], countS2[char]), чтобы учесть минимальное количество одинаковых символов в обеих строках.)
      commonCount += Math.min(countS1[char], countS2[char]);
    }
  }
  //Возвращаем сумму всех минимальных значений, которые представляют собой количество общих символов
  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
