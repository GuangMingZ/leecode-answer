/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const repeatIdxSet = new Set();
  for (let i = 0, n = s.length - 1; i <= n; i++) {
    let isRepeat = false;
    if (repeatIdxSet.has(i)) {
      isRepeat = true;
      continue
    }
    for (let j = i + 1; j <= n; j++) {
      if (s[i] === s[j]) {
        repeatIdxSet.add(i);
        repeatIdxSet.add(j);
        isRepeat = true;
      }
    }
    if (!isRepeat) {
      return i;
    }
  }
  return -1;
};

var firstUniqChar = function(s) {
    const frequency = _.countBy(s);
    for (const [i, ch] of Array.from(s).entries()) {
        if (frequency[ch] === 1) {
            return i;
        }
    }
    return -1;
};