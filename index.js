//Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

var majorityElement = function (nums) {
  let sizeOfArry = nums.length;
  let timesAppeared = sizeOfArry / 3;

  const counts = {};
  for (const num of nums) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  let Varry = Object.values(counts);
  let Karry = Object.keys(counts);
  let returnArry = [];

  for (let i = 0; i < Varry.length; i++) {
    if (Varry[i] > timesAppeared) {
      returnArry.push(Number(Karry[i]));
    }
  }

  return returnArry;
};

majorityElement([3, 2, 3]);
//returns 3
