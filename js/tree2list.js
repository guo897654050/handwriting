// 测试
const data = [
  {
    "id": 1,
    "name": "部门1",
    "pid": 0,
    "children": [
      {
        "id": 2,
        "name": "部门2",
        "pid": 1,
        "children": []
      },
      {
        "id": 3,
        "name": "部门3",
        "pid": 1,
        "children": [
          {
            "id": 4,
            "name": "部门4",
            "pid": 3,
            "children": [
              {
                "id": 5,
                "name": "部门5",
                "pid": 4,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
]

const res = [];
function covertTree2(data) {
  for (let i = 0; i < data.length; i++) {
    const tmpData = data[i];
    const keys = Object.keys(tmpData)
    let tmp = {}
    for (let key of keys) {
      if (key === 'children') {
        covertTree(tmpData.children)
      } else {
        tmp[key] = tmpData[key]
      }
    }
    res.push(tmp)
  }
  return res;
}

const covertTree = (tree) => {
  tree.forEach((item) => {
    const children = item.children;
    delete item.children
    res.push(item)
    if (children?.length) {
      return covertTree(children)
    }
  })
  return res
}

console.log(covertTree(data))
