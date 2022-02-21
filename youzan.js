/**
 * 1. 实现一个函数，判断两个变量值是否相等
 *
 * 注意
 * - 数据类型不限于示例，尽可能考虑边界
 * - function 引用相等即可
 */
const foo1 = {
  a: 1,
  b: "1",
  // c: NaN,
  c: () => { },
  d: {
    a: 1,
    b: 2,
    c: {
      d: 9
    }
  },
  f: {
    a: 1,
  },
  g: null,
};

const foo2 = {
  a: 1,
  b: "1",
  // c: NaN,
  c: () => { },
  d: {
    a: 1,
    b: 2,
    c: {
      d: 9
    }
  },
  f: {
    a: 1,
  },
  g: null,
};

function isEqual(target1, target2) {
  for (let key in target1) {
    if (typeof target1[key] === 'number' ||
      typeof target1[key] === 'string' ||
      typeof target1[key] === 'boolean' ||
      typeof target1[key] === 'undefined') {
      if (target1[key] === target2[key]) {
        continue;
      } else {
        return false
      }
    } else if (typeof target1[key] === 'object') {
      if (target1[key] === null && target2[key] === null) {
        continue
      } else {
        return isEqual(target1[key], target2[key])
      }
    } else if (typeof target1[key] === 'function') {
      if (target1[key].toString() === target2[key].toString()) {
        continue
      } else {
        return false;
      }
    }
  }
  return true
}


const a = {
  a: 1,
  b: 2,
  c: {
    c: 3,
    d: {
      a: 99
    }
  }
}
const b = {
  a: 1,
  b: 2,
  c: {
    c: 3,
    d: {
      a: 99
    }
  }
}

// console.log(isEqual(foo1, foo2));

// /**
//  * 2. 实现 getValue 函数来获取path对应的值
//  */
var object = { a: [{ b: { c: 3 } }] }; // path: 'a[0].b.c'
var array = [{ a: { b: [1] } }]; // path: '[0].a.b[0]'

function getValue(target, valuePath, defaultValue) {
  const path = valuePath.split('.');
  let res = target;
  const r1 = /[a-z]/g
  const r2 = /\d/g
  for (let p of path) {
    if (p.length > 1) {
      let char = p.match(r1)
      const num = Number(p.match(r2)[0])
      if (char) {
        char = char[0]
        res = res[char][num] ? res[char][num] : defaultValue
      } else {
        res = res[num] ? res[num] : defaultValue
      }

    } else {
      const char = p.match(r1)
      if (char) {
        res = res[char[0]] ? res[char[0]] : defaultValue
      } else {
        const num = Number(p.match(r2)[0])
        res = res[num] ? res[num] : defaultValue
      }
    }
  }
  return res
}

// console.log(getValue(object, "a[0].b.c", 0)); // 输出3
// console.log(getValue(array, "[0].a.b[0]", 12)); // 输出 1
// console.log(getValue(array, "[0].a.b[0].c", 12)); // 输出 12



// /**
//  * 问题 3
//  * 将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，例如`110000000000000000000000000000000000000000000000`，
//  * 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
//  * 时间区间被选中，例如`110010000000000000000000000000000000000000000000`，表示00:00-1:00和02:00-02:30这两个时间区间被选中了。
//  *
//  * 要求：写一个函数timeBitmapToRanges，将上述规则描述的时间位图转换成一个选中时间区间的数组。
//  * 示例输入：`"110010000000000000000000000000000000000000000000"`
//  * 示例输出：`["00:00~01:00", "02:00~02:30"]`
//  */
// function timeBitmapToRanges(str) {
// }

// console.log(
//   timeBitmapToRanges("110010000000000000000000000000000000000000000000")
// );
// console.log(
//   timeBitmapToRanges("110011000000110000000000000000000000000000001111")
// );
