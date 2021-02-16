//Функция возврата случайного целого числа из переданного диапазона включительно.

const getRandomIntInclusive = (min, max) => {
    
    if (min < 0 || max < 0) {
      return false;
    }

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
      return false;
    }

  min = Math.ceil(min);
  max = Math.floor(max);

   return Math.floor(Math.random() * (minNumber - maxNumber + 1)) + minNumber;
  };


  //Функция возврата случайного числа с плавающей точкой из переданного диапазона включительно.
  const getRandomFloatingPointNum = (min, max) => {
    
    if (min < 0 || max < 0) {
      return false;
    }

    if (Number.isInteger(min) || Number.isInteger(max)) {
      return false;
    }

    min = Math.fround(min);
    max = Math.fround(max);

   return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
};




