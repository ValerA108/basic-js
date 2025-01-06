const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = ""; // Для хранения результата
  let count = 1; // Счетчик для отслеживания повторений символов

  // Проходим по строке с использованием forEach и индекса (Для прохода по строке используем [...], чтобы преобразовать строку в массив символов, что позволяет удобнее работать с каждым символом строки.)
  [...str].forEach((char, i) => {
    // Если текущий символ равен предыдущему
    if (char === str[i + 1]) {
      count++;
    } else {
      // Добавляем в результат количество повторений (если больше 1) и символ
      result += count > 1 ? `${count}${char}` : char; //используется шаблонная строка для добавления в строку результата, что упрощает создание строки с числовым значением и символом
      count = 1; // Сбрасываем счетчик
    }
  });

  return result;
}

module.exports = {
  encodeLine,
};
