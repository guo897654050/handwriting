// 为了演示方便，我们在此用fetchImage函数来模拟异步请求图片，返回成功提示
function fetchImage(url) {
  // 模拟请求的响应时间在0 - 1s之间随机
  const timeCost = Math.random();
  return new Promise(resolve => setTimeout(() => {
    resolve(`get: ${url}`)
  }, timeCost))
}

// 待请求的图片
const imageUrls = [
  'pic_1.png',
  'pic_2.png',
  'pic_3.png',
  'pic_4.png',
  'pic_5.png',
  'pic_6.png',
]


// Promise
//   .all(imageUrls.map(url => fetchImage(url)))
//   .then(resList => console.log(resList))



function promiseALlWithLimit(imageUrls, limit = 2) {
  let urls = [...imageUrls];
  let rs = new Map();

  function run() {
    if (urls.length > 0) {
      let url = urls.shift();
      console.log(url, ' [start at] ', (new Date()).getTime() % 10000)
      return fetchImage(url).then((res) => {
        console.log(url, ' [end at] ', (new Date()).getTime() % 10000)
        rs.set(url, res);
        return run();
      })
    }
  }

  const promiseList = new Array(Math.min(urls.length, limit))
    .fill(Promise.resolve())
    .map((promise) => promise.then(() => run()))

  return Promise.all(promiseList).then(() => imageUrls.map((url) => rs.get(url)))
}

// promiseALlWithLimit(imageUrls, 2)


// 错误，因为queue中，要等俩都请求完才会继续下次请求
function limit(imageUrls, limit = 2) {
  return new Promise(async (resolve) => {
    let rs = new Map();
    for (let i = 0; i < imageUrls.length; i += limit) {
      let queue = [];
      let index
      for (let j = 0; j < limit; j++) {
        index = i + j
        console.log('index1', index)
        queue.push(fetchImage(imageUrls[index]))
      }
      await Promise.all(queue).then((res) => {
        console.log('index2', index)
        res.forEach((resItem, idx) => {
          rs.set(i + idx, resItem)
        })
      })
    }
    resolve(rs)
  })
}

limit(imageUrls, 2).then((res) => console.log(888, res))




