class Subject {
  constructor() {
    this.observerList = [];
  }

  addObserver(observer) {
    this.observerList.push(observer)
  }

  notify(task) {
    console.log('我要开始通知所有人了！');
    this.observerList.forEach(observer => observer.update(task))
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(task) {
    console.log('通知前', this.name)
    this.name = task;
    console.log('通知后', this.name)

  }
}


const ob1 = new Observer('小明');
const ob2 = new Observer('小红');

const subject = new Subject();
subject.addObserver(ob1)
subject.addObserver(ob2)
subject.notify('小黑')


