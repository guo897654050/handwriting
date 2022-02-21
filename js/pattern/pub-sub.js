class PubSub {
  constructor() {
    // 事件中心
    // 存储格式: warTask: [], routeTask: []
    // 每种事件(任务)下存放其订阅者的回调函数
    this.events = {}
  }
  // 订阅方法
  subscribe(type, cb) {
    if (!this.events[type]) {
      this.events[type] = []
    }
    this.events[type].push(cb)
  }

  publish(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach(cb => cb(...args))
    }
  }

  unsubscribe(type, cb) {
    if (this.events[type]) {
      const idx = this.events[type].findIndex((e) => e.name === cb)
      console.log(111, idx)
      if (idx !== -1) {
        this.events[type].splice(idx, 1)
      }
    }
    // if (this.events[type].length === 0) {
    //   delete this.events[type];
    // }
    console.log('删除后！', this.events[type])
  }

}


const pubsub = new PubSub();
pubsub.subscribe('新闻频道', function sub1(info) {
  console.log('开始订阅新闻频道！' + info)
})

pubsub.subscribe('娱乐频道', (info) => {
  console.log('开始订阅娱乐频道！' + info);
})


pubsub.publish('新闻频道', '发布新闻1')
pubsub.publish('娱乐频道', '发布娱乐1')

pubsub.unsubscribe('新闻频道', 'sub1')

