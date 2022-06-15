// 使用random2实现rand5；
function randIdx(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rand2 = randIdx.bind(null, 1, 2);


function rand5() {

  function rand4() {
    let a = () => {
      return (rand2() - 1) * 2 + rand2() // rand4
    }
    return a();
  }


  while (true) {
    let b = (rand4() - 1) * 4 + rand4();// rand16
    console.log('b', b)
    while (b <= 15) return b % 5 + 1
  }
}

console.log(rand5())
