//Функция возврата случайного целого числа из переданного диапазона включительно.

const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {
    return false;
  }

  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return false;
  }

  if (min === max) {
    return min;
  }

  if (min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return Math.floor(Math.random() * (min - max + 1)) + max;
};


  //Функция возврата случайного числа с плавающей точкой из переданного диапазона включительно.
  const getDecimalNumber = (min, max, decimal) => {
    if (min < 0 || max < 0) return false;

    let res = Math.random() * Math.abs(max - min + 1) + Math.min(max, min);
    
    if (res > Math.max(min, max)) res = Math.max(min, max);

    return Number(res.toFixed(decimal));
  }


