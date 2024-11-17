// @leet start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const abc = "abcdefghijklmnopqrstuvwxyz0123456789";
  if (s == " ") return true;
  const result = s
    .toLowerCase()
    .split("")
    .filter((character) => abc.split("").includes(character));
  return result.join("") == result.reverse().join("");
};
// @leet end
