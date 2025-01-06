const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // Проверяем, что sampleActivity — это строка и её можно преобразовать в число, и что это число больше 0, но меньше MODERN_ACTIVITY(уровень активности углерода в современном образце (в данном случае 15))
  if (
    typeof sampleActivity !== "string" ||
    isNaN(sampleActivity) ||
    +sampleActivity <= 0 ||
    +sampleActivity >= MODERN_ACTIVITY
  ) {
    return false;
  }
  // Преобразуем строку в число
  const currentActivity = parseFloat(sampleActivity);

  // Рассчитываем возраст с использованием формулы(Считаем константу распада λλ как Math.LN2 / HALF_LIFE_PERIOD — это основание натурального логарифма, делённое на период полураспада углерода.)
  const decayConstant = Math.LN2 / HALF_LIFE_PERIOD;
  const age = Math.log(MODERN_ACTIVITY / currentActivity) / decayConstant;

  // Возвращаем возраст, округленный до ближайшего целого числа
  return Math.ceil(age);
}

module.exports = {
  dateSample,
};
