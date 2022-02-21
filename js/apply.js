// Function.prototype.myApply = function (context, args) {
//   //这里默认不传就是给window,也可以用es6给参数设置默认参数
//   context = context || window
//   args = args ? args : []
//   //给context新增一个独一无二的属性以免覆盖原有属性
//   const key = Symbol()
//   context[key] = this
//   //通过隐式绑定的方式调用函数
//   const result = context[key](...args)
//   //删除添加的属性
//   delete context[key]
//   //返回函数调用的返回值
//   return result
// }

Function.prototype.myApply = function (context, args) {
  context = context || window;
  args = args ? args : [];
  const key = Symbol();
  context[key] = this;
  const res = context[key](...args);
  delete context[key];
  return res;
}

Function.prototype.myCall = function (context, ...args) {
  console.log(111232, args)
  context = context ? context : window;
  args = args ? args : [];
  const key = Symbol();
  context[key] = this;
  const res = context[key](...args)
  delete context[key]
  return res
}

Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  args = args ? args : [];
  return function newFn(...newArgs) {
    // if (this instanceof newFn) {
    //   return new fn(...args, ...newArgs)
    // }
    return fn.apply(context, args)
  }
}

const obj = {
  name: 'libai',
  say(age, time) {
    console.log(this.name + age + time)
  }
}

const obj2 = {
  name: 'sun'
}



obj.say.myApply(obj2, [23, 13])
obj.say.myCall(obj2, 23, 13)
const c = obj.say.myBind(obj2, 999999, 99999)
c()

