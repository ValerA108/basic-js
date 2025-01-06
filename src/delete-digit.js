const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString(); // Преобразуем число в строку
  let maxNumber = -Infinity; // Инициализируем переменную для максимального числа

  // Перебираем все возможные числа, удаляя по одному символу
  for (let i = 0; i < str.length; i++) {
    const newNumber = parseInt(str.slice(0, i) + str.slice(i + 1), 10); // Удаляем i-й символ и конкатенируем оставшиеся части
    maxNumber = Math.max(maxNumber, newNumber); // Обновляем максимальное число
  }

  return maxNumber;
}

module.exports = {
  deleteDigit,
};
