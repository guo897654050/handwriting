// format("aa{0}bb{1}cc", 11, 22)
// aa11bb22

function format(formatter, ...args) {
  const reg = /\{(\d+)\}/g
  return formatter.replace(reg, (m, i) => {
    return args[i]
  })
}

console.log(format('aa{0}bb{1}cc', 11, 22))
