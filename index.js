const isDevelopment = true
const options = {
  data: {
    a: {
      b: {
        c: [1, 23]
      }
    },
    'htmlWebpackPlugin.options.cdn.js': [888],
    'a.v.css': [4455],
    m: {
      n: {
        a: {
          b: 5555
        }
      }
    }
  }
}

function dfs(keys, value, res) {
  if (keys.length) {
    const strItem = keys.shift();
    if (!keys.length) {
      res[strItem] = value;
    } else {
      const tmp = res[strItem] ? res[strItem] : res[strItem] = {};
      dfs(keys, value, tmp)
    }
  }
  return res;
}

function dfs2(rebuildData, key, value) {
  const tmp = rebuildData[key] ? rebuildData[key] : rebuildData[key] = {};
  if (typeof value === 'object') {
    const nextKey = Object.keys(value)[0]
    dfs2(tmp, nextKey, value[nextKey])
  } else {
    rebuildData[key] = value
  }
}

if (options.data) {
  const rebuildData = {}
  Object.keys(options.data).forEach((key) => {
    const value = options.data[key]
    if (key.includes('.')) {
      const keys = key.split('.')
      dfs(keys, value, rebuildData)
    } else {
      dfs2(rebuildData, key, value)
    }
  })
  console.log(9999, rebuildData)
}
  // options.data = rebuildData;




