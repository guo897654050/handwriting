// format("aa{0}bb{1}cc", 11, 22)
// aa11bb22

function format(formatter, ...args) {
  const reg = /\{(\d+)\}/g
  return formatter.replace(reg, (m, i) => {
    return args[i]
  })
}



// console.log(format('aa{0}bb{1}cc', 11, 22))


function format2(words, ...args) {
  const reg = /\{\{(\w+)\}\}/g;
  return words.replace(reg, (m, i) => {
    console.log('m', m);
    console.log('i', i);
  })
}

const template = {
  a: 1,
  b: 2
}

console.log(format2('aa{{a}}bb{{b}}cc', template))
