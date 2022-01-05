// 567字符串排列
function checkInclusion(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  if (n > m) return false;
  let arr1 = new Array(26).fill(0);
  let arr2 = new Array(25).fill(0);
  for (let i = 0; i < n; i++) {
    arr1[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
    arr2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
  }
  if (arr1.toString() === arr2.toString()) return true;
  for (let i = n; i < m; i++) {
    arr2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
    arr2[s2[i - n].charCodeAt() - 'a'.charCodeAt()]--;
    if (arr1.toString() === arr2.toString()) return true;
  }
  return false;
}