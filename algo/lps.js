const longestPalindrome = (s) => {
  if (s.length === 1) {
    return s
  }
  let maxLength = 1;
  let begin = 0;
  const dp = [];
  for (let i = 0; i < s.length; i++) {
    dp[i] = new Array(s.length).fill(false);
  }

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }

  for (j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }
      if (dp[i][j] && j - i + 1 > maxLength) {
        begin = i;
        maxLength = j - i + 1;
      }
    }
  }
  console.log(dp)
  return s.substr(begin, maxLength)
}

const str = 'abbbba';
console.log(longestPalindrome(str))