// 使用 Fisher-Yates 洗牌算法，这是一种高效的数组随机化算法
function shuffleArray(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let shuffledArray = shuffleArray(sortedArray);
console.log(shuffledArray);
