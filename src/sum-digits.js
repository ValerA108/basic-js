const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // Продолжаем суммировать цифры до тех пор, пока не получим одноцифровое число
  while (n >= 10) {
    n = String(n) // Преобразуем число в строку
      .split("") // Разбиваем строку на массив символов
      .reduce((sum, digit) => sum + Number(digit), 0); // Суммируем цифры
  }
  return n; // Возвращаем одноцифровое число
}

module.exports = {
  getSumOfDigits,
};
