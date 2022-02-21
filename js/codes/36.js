// 实现36进制相加 1b + 2x = 48 （解释：47+105=152）
function get36num() {
  const nums = [];
  for (let i = 0; i < 36; i++) {
    if (i >= 0 && i <= 9) {
      nums.push(String(i))
    } else {
      // a=97
      nums.push(String.fromCharCode(i + 87))
    }
  }
  return nums
}


function sum36(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  const num36 = get36num();
  console.log(num36)
  let carry = 0;
  let res = [];
  while (i >= 0 || j >= 0 || carry) {
    const val1 = i >= 0 ? num36.indexOf(num1[i]) : 0; // number
    const val2 = j >= 0 ? num36.indexOf(num2[j]) : 0; //number
    const val = val1 + val2 + carry;
    carry = Math.floor(val / 36);
    res.push(num36.indexOf(String(val % 36)))
    i -= 1;
    j -= 1;
  }
  return res.reverse().join('');
}

console.log(sum36('1b', '2x'))