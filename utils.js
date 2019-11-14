const utils = {
  isNaN: function(value) {
    return !value.match(/^\d+$/);
  },

  getRandomItem: function(array) {
    return array[Math.floor(Math.random() * array.length)];
  },

  getRandomItems: function(array, num) {
    const shuffledArray = utils.shuffle(array);
    return shuffledArray.slice(0, num);
  },

  shuffle: function(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (array.length - i));

      let temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    return array;
  }
};

module.exports = utils;
