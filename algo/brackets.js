var isValid = function (s) {
  const leftBrackets = ['(', '[', '{'];
  const bracketsMap = {
    '{': '}',
    '[': ']',
    '(': ')',
    '}': '{',
    ']': '[',
    ')': '('
  }
  let flag = true;
  const tmpArr = [];
  for (let i = 0; i < s.length; i++) {
    if (leftBrackets.includes(s[i])) {
      tmpArr.push(s[i])
    } else {
      const item = tmpArr.pop();
      if (bracketsMap[item] === s[i]) {
        continue
      } else {
        flag = false
      }
    }
  }
  return flag && tmpArr.length === 0;
};
const s = '(('
console.log(isValid(s))