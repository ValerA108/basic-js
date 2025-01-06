const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // Проверяем, что входные данные являются массивом
  if (!Array.isArray(matrix)) {
    throw new TypeError("Входные данные должны быть двумерным массивом");
  }

  // Плоское преобразование матрицы в один массив
  // Затем фильтрация элементов, равных "^^"
  // И подсчет их количества с помощью свойства length
  return matrix
    .flat() // Разворачиваем вложенные массивы в один массив
    .filter((item) => item === "^^").length; // Оставляем только те элементы, которые равны "^^" // Возвращаем количество таких элементов
}

module.exports = {
  countCats,
};
