const data = [
  // 注意这里，专门把pid为1的元素放一个在前面
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
  { id: 6, name: '部门6', pid: 5 },
  { id: 7, name: '部门7', pid: 6 },
]


function list2tree(array) {
  const hashMap = {};
  const result = [];
  array.forEach((item) => {
    const { id, pid } = item;
    hashMap[id] = item;
    hashMap[id].children = [];
    if (pid !== 0) {
      hashMap[pid].children.push(item)
    } else {
      result.push(item)
    }
  })
  return result
}

console.log(list2tree(data))