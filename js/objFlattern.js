const foo1 = {
  'A': 1,
  'B.A': 2,
  'B.B': 3,
  'C.B.C': 4,
  'C.B.D': 5,
}

function obj2Flattern2(obj) {
  let res = {};
  let keys = Object.keys(obj);
  for (let key of keys) {
    let value = obj[key];
    let tmpKey = key.split('.');
    dfs(res, tmpKey, value)
  }
  function dfs(res, tmpKey, value) {
    if (tmpKey.length === 0) return;
    if (tmpKey.length === 1) {
      res[tmpKey[0]] = value;
      return;
    }
    let key = tmpKey.shift();
    res[key] = res[key] || {};
    dfs(res[key], tmpKey, value)
  }
  return res
}

console.log('obj2Flattern2', obj2Flattern2(foo1))



const foo2 = {
  A: 1,
  B: {
    A: 2,
    B: 3
  },
  C: {
    B: {
      C: 4,
      D: 5
    }
  },
  D: [{ a: 1 }, { b: { c: 3 } }]
}


function obj2Flattern(obj) {
  let res = {};
  function dfs(prefix, obj) {
    if (typeof obj === 'number' || typeof obj === 'string') {
      res[prefix] = obj;
      return
    }
    if (Array.isArray(obj)) {
      for (let index in obj) {
        tmp = `${prefix ? `${prefix}[${index}]` : `[${index}]`}`;
        dfs(tmp, obj[index])
      }
    } else {
      let keys = Object.keys(obj);
      for (let key of keys) {
        tmp = `${prefix ? `${prefix}.${key}` : `${key}`}`
        dfs(tmp, obj[key])
      }
    }

  }
  dfs('', obj);
  return res
}

console.log('obj2Flattern', obj2Flattern(foo2))