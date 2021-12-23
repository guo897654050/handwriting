class publish {
  constructor() {
    this.list = {};
  }


  // 订阅者
  on(key, fn) {
    if (this.list[key]) {
      this.list[key].push(fn)
    } else {
      this.list[key] = [fn];
    }
  }

  // 取消订阅,删除对应的function
  off(key, fn) {
    let tasks = this.list[key];
    if (!tasks) return false;
    // 如果没穿func，说明该list都要被清空
    if (!fn) this.list[key] = [];
    tasks.forEach((task, index) => {
      if (task.toString() === fn.toString()) {
        tasks.splice(index, 1);
      }
    })
  }

  // 发布内容
  emit() {
    const args = [...arguments];
    const key = args.shift();
    const tasks = this.list[key];
    tasks.forEach((task) => {
      task.apply(this, args)
    })
  }

}

const publisher = new publish();

publisher.on('小明', function (name) {
  console.log('小明订阅的球队是' + name);
})

publisher.on('小包', function (name) {
  console.log('小包订阅的球队是' + name);
})

publisher.off('小包', function (name) {
  console.log('小包订阅的球队是' + name);
})

publisher.emit('小明', '湖人')
publisher.emit('小包', '掘金')


