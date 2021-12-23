const strStr = (s1, s2) => {
  const len1 = s1.length;
  const len2 = s2.length;
  for (let i = 0; i < len1; i++) {
    const tmp = s1.slice(i, i + len2)
    console.log(333, tmp)
    if (tmp === s2) {
      return i
    }
  }
  return -1;
}

const s1 = '';
const s2 = ''
console.log(strStr(s1, s2))