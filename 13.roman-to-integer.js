// @leet start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman_dict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && roman_dict[s[i]] > roman_dict[s[i - 1]]) {
      result += roman_dict[s[i]] - 2 * roman_dict[s[i - 1]];
    } else {
      result += roman_dict[s[i]];
    }
  }
  return result;
};
// @leet end
