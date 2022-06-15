// 示例:
// 假设 words = ["practice", "makes", "perfect", "coding", "makes"]
// 输入: word1 = “coding”, word2 = “practice”
// 输出: 3
// 输入: word1 = "makes", word2 = "coding"
// 输出: 1

// 注意:
// 你可以假设 word1 不等于 word2, 并且 word1 和 word2 都在列表里。
const words = ["practice", "makes", "perfect", "coding", "makes"]
// const word1 = "coding"
// const word2 = "practice"
const word1 = "makes"
const word2 = "coding"

function minDis(words, word1, word2) {
  let l1 = -1;
  let l2 = -1;
  let dis = Infinity;
  for (let i = 0; i < words.length; i++) {
    if (word1 === words[i]) {
      l1 = i;
    } else if (word2 === words[i]) {
      l2 = i;
    }
    if (l1 !== -1 && l2 !== -1) {
      dis = Math.min(dis, Math.abs(l1 - l2))
    }
  }
  return dis;
}

console.log(minDis(words, word1, word2))