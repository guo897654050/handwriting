function add(num1, num2) {
  const number1 = String(num1);
  const number2 = String(num2);
  let l1 = number1.length - 1;
  let l2 = number2.length - 1;
  let l = Math.max(l1, l2)
  let carry = 0;
  let res = []
  while (l >= 0 || carry) {
    let val1 = number1[l] ? number1[l] : 0;
    let val2 = number2[l] ? number2[l] : 0;
    if (val1 === '.' && val2 === '.') {
      res.push('.');
      l -= 1;
      continue
    }
    console.log(val1, val2)
    let val = Number(val1) + Number(val2) + carry;
    carry = Math.floor(val / 10);
    res.push(val % 10);
    l -= 1;
  }
  return res.reverse().join('')
}

console.log(add(0.1333, 0.23))