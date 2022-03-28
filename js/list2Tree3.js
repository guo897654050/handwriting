var data1 = [{
  "province": "浙江",
  "city": "杭州",
  "name": "西湖"
}, {
  "province": "四川",
  "city": "成都",
  "name": "锦里"
}, {
  "province": "四川",
  "city": "成都",
  "name": "方所"
}, {
  "province": "四川",
  "city": "阿坝",
  "name": "九寨沟"
}]

function list2Tree(data) {
  const res = [];
  let proviceSet = new Set();
  let citySet = new Set();
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let tmp = {};
    tmp.value = item.province;
    if (proviceSet.has(item.province)) {
      tmp = res.find((resData) => resData.value === item.province)
    } else {
      tmp.children = [];
    }
    if (citySet.has(item.city)) {
      tmp.children[0].children.push({
        value: item.name
      })
    } else {
      tmp.children.push({
        value: item.city,
        children: [{
          value: item.name
        }]
      })
    }
    if (proviceSet.has(item.province)) continue
    res.push(tmp)
    proviceSet.add(item.province)
    citySet.add(item.city)
  }
  return res
}

console.log(JSON.parse(JSON.stringify(list2Tree(data1))))
// console.log(list2Tree(data1))

var data2 = [{
  "value": "浙江",
  "children": [{
    "value": "杭州",
    "children": [{
      "value": "西湖"
    }]
  }]
}, {
  "value": "四川",
  "children": [{
    "value": "成都",
    "children": [{
      "value": "锦里"
    }, {
      "value": "方所"
    }]
  }, {
    "value": "阿坝",
    "children": [{
      "value": "九寨沟"
    }]
  }]
}]