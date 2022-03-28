// const data = { foo: true, bar: true }// 追踪依赖：
function track(target, key) {
  if (!activeEffect) return
  let depsMap = bucket.get(target)
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  deps.add(activeEffect)
  activeEffect.deps.push(deps)
}

// 触发依赖： 
function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)
  const effectToRun = new Set();

  effects && effects.forEach((fn) => {
    if (fn !== activeEffect) {
      effectToRun.add(fn)
    }
  })
  // 防止 Set 的循环,详情见 P55
  effectToRun.forEach(fn => {
    if (fn.options.scheduler) {
      fn.options.scheduler(fn)
    } else {
      fn()
    }
  });
}

// 清除遗留依赖:
function cleanup(effectFn) {
  for (let i = 0; i < effectFn.deps.length; i++) {
    const deps = effectFn.deps[i]
    deps.delete(effectFn)
  }
  effectFn.deps.length = 0
}


const bucket = new WeakMap()
const data = {
  ok: false,
  text: 'hello world!',
  foo: 1,
  bar: true
}

const obj = new Proxy(data, {
  get(target, key) {
    track(target, key)
    return target[key]
  },
  set(target, key, newVal) {
    target[key] = newVal
    trigger(target, key)
    return true
  }
})

let activeEffect
const effectStack = [];
function effect(fn, options = {}) {
  const effectFn = () => {
    // 每次添加依赖的时候先把历史遗留的依赖给清除了
    cleanup(effectFn)
    activeEffect = effectFn;
    effectStack.push(effectFn);
    fn();
    effectStack.pop();
    // 手动改变activeEffect指向栈顶
    activeEffect = effectStack[effectStack.length - 1]
  }
  effectFn.deps = [];
  effectFn.options = options;
  effectFn()
}

const jobQueue = [];
let isFlushing = false;
let p = Promise.resolve();
function flushJob() {
  if (isFlushing) return;
  isFlushing = true;
  p.then(() => {
    jobQueue.forEach(job => job())
  }).finally(() => {
    isFlushing = false;
  })
}


effect(() => {
  console.log(obj.foo)
}, {
  scheduler(fn) {
    jobQueue.push(fn);
    flushJob();
  }
})
obj.foo++;
obj.foo++;


