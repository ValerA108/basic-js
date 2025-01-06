const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // Минимальное количество ходов для решения задачи = 2^n - 1
  const turns = 2 ** disksNumber - 1;

  // Время в секундах = количество ходов / (Скорость задается в ходах/час, поэтому переводим в ходов/сек (turnsSpeed/3600))(чтобы округлить результат вниз до целого числа используем Math.floor а не Math.round, потому что Math.round может округлить в большую сторону)
  const seconds = Math.floor(turns / (turnsSpeed / 3600));
  //Возвращается объект с двумя свойствами: turns (количество ходов) и seconds (время в секундах)
  return { turns, seconds };
}

module.exports = {
  calculateHanoi,
};
