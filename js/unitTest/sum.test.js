const sum = require('./sum');

console.log(sum)

// number
test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// tobeNull
test('null', () => {
  const n = null;
  expect(n).toBeNull()
  // expect(n).toBeUndefined(); 
})


//error
function compilerError() {
  throw new Error('you are using error node development!')
}

test('test error', () => {
  expect(() => compilerError()).toThrow();
  expect(() => compilerError()).toThrow(Error)
})

// promise

async function p1() {
  return 'promise test'
}

function p2() {
  return new Promise((resolve, reject) => {
    resolve('promise2')
  })
}

function p3() {
  return new Promise((resolve, reject) => {
    reject('promise3')
  })
}

test('promise', async () => {
  const data = await p1();
  expect(data).toBe('promise test')
})

test('promise2', async () => {
  const data = await p2();
  expect(data).toBe('promise2')
})

test('promise3', async () => {
  try {
    const data = await p3();
  } catch (e) {
    expect(e).toBe('promise3')
  }
})

