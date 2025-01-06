const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // Создаем экземпляр объекта Map для хранения количества вхождений каждого имени
  const nameCounts = new Map();
  //используем метод map() для перебора всех имен файлов в массиве names, (возвращает новый массив с переименованными файлами. Каждый элемент этого массива — это либо исходное имя, если оно уникально, либо новое имя с суффиксом, если оно повторяется).
  return names.map((name) => {
    //Если имя еще не встречалось в nameCounts, это значит, что оно уникально на данный момент
    if (!nameCounts.has(name)) {
      // Если имя встречается впервые в nameCounts, устанавливаем его количество в 1
      nameCounts.set(name, 1);
      return name;
    } else {
      // Если имя уже существует, добавляем суффикс (k, где k — это количество предыдущих вхождений этого имени)
      const count = nameCounts.get(name); // Получаем количество вхождений имени
      const newName = `${name}(${count})`; // Формируем новое имя с суффиксом
      nameCounts.set(name, count + 1); // Увеличиваем количество вхождений исходного имени
      nameCounts.set(newName, 1); // Добавляем новое имя в map с начальным значением 1
      return newName;
    }
  });
}

module.exports = {
  renameFiles,
};
