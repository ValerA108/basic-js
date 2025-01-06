const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //используем деструктуризацию, чтобы сразу получить все необходимые параметры из объекта options, с дефолтными значениями, если они не были переданы
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  // Формируем строку addition, повторяя её нужное количество раз (создаем массив из повторений строки addition (конвертируем addition в строку, если это не строка), а затем мы соединяем их через additionSeparator)
  const additionPart = new Array(additionRepeatTimes)
    .fill(String(addition))
    .join(additionSeparator);

  // Формируем итоговую строку, повторяя основную строку str нужное количество раз (создаем массив из повторений строки str, к каждому элементу которого добавляется additionPart. Далее мы соединяем эти элементы через separator)
  return new Array(repeatTimes).fill(str + additionPart).join(separator);
}

module.exports = {
  repeater,
};
