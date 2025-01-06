const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // Используем регулярное выражение для проверки формата MAC-48
  const regex = /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/;
  //Разбор регулярного выражения:
  //MAC-48 адрес состоит из 6 групп по два символа в каждой, которые могут быть цифрами от 0 до 9 или буквами от A до F, и эти группы разделяются дефисами.
  // ^ — начало строки.
  //([0-9A-F]{2}-){5} — эта часть выражения повторяется 5 раз:
  //[0-9A-F]{2} — означает два символа, которые могут быть цифрами от 0 до 9 или буквами от A до F.
  //- — дефис, который разделяет группы.
  //[0-9A-F]{2} — последняя группа состоит из двух символов (без дефиса после нее).
  //$ — конец строки.

  // Проверяем, соответствует ли строка регулярному выражению
  return regex.test(n);
}
module.exports = {
  isMAC48Address,
};
