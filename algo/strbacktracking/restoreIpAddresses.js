function restoreIpAddresses(s) {
  let res = [];
  let path = [];
  let start = 0;
  function dfs(start) {
    if (path.length === 4 && start === s.length) {
      res.push(path.join('.'))
      return;
    }
    if (path.length === 4 && start < s.length) {
      return;
    }

    for (let len = 1; len <= 3; len++) {
      if (start + len > s.length) return;
      // 切出来的字符第一位不能有0
      if (len !== 1 && s[start] === '0') return;
      const str = s.substring(start, start + len);
      // 切出来的字符不能大于255
      if (len === 3 && +str > 255) return;
      path.push(str);
      dfs(start + len);
      path.pop();
    }

  }
  dfs(start);
  return res
}

console.log(restoreIpAddresses('25525511135'))