const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const zeroColumns = new Set(); // Множество для отслеживания столбцов с нулями, это позволяет быстро проверять, был ли ноль в столбце, и пропускать элементы в таких столбцах

  // Перебираем строки матрицы
  matrix.forEach((row) => {
    row.forEach((value, colIndex) => {
      //Если текущий элемент матрицы равен нулю, добавляем индекс столбца в множество zeroColumns. Если индекс столбца уже в множестве, то этот элемент пропускается. Если же индекса нет в множестве, добавляем значение в сумму
      if (value === 0) {
        zeroColumns.add(colIndex); // Если значение 0, добавляем столбец в множество
      } else if (!zeroColumns.has(colIndex)) {
        sum += value; // Добавляем значение, если в столбце нет нуля
      }
    });
  });

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
