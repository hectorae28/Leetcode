// @leet start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const newArray = [];
  for (i in nums) {
    for (j in nums) {
      if (nums[i] + nums[j] == target && i !== j) {
        newArray.push(Number(i), Number(j));
        return newArray;
      }
    }
  }
};
// @leet end

