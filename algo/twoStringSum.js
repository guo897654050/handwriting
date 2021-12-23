const sum = (num1, num2) => {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  const res = [];
  while (i >= 0 || j >= 0 || carry > 0) {
    const a = i >= 0 ? num1.charAt(i) - '0' : 0;
    const b = j >= 0 ? num2.charAt(j) - '0' : 0;
    const val = a + b + carry;
    carry = Math.floor(val / 10)
    res.push(val % 10);
    i--;
    j--
  }
  return res.reverse().join('');
}

const num1 = '456';
const num2 = '77'
console.log(sum(num1, num2))