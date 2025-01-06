const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // Проверяем, что input - это массив
  if (!Array.isArray(members)) {
    return false;
  }

  // Извлекаем первые буквы всех строковых элементов, приводим их к верхнему регистру и сортируем
  const teamName = members
    .filter((member) => typeof member === "string") // Оставляем только строки
    .map((member) => member.trim()[0].toUpperCase()) // Извлекаем первую букву и приводим к верхнему регистру
    .sort() // Сортируем буквы в алфавитном порядке
    .join(""); // Собираем в строку

  // Возвращаем результат, если полученное имя не пустое
  return teamName.length > 0 ? teamName : false;
}

module.exports = {
  createDreamTeam,
};
