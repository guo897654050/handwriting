const arr = ['aa, bb', 'cc, dd'];
console.log(arr.map((item) => item.split(" ").join('\n')))