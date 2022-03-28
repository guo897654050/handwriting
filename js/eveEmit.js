class eventEmitter {
  constructor() {
    this.event = {};
  }

  on(fn, type) {
    if (!this.event[type]) {
      this.event[type] = [];
    }
    this.event[type].push(fn)
  }


  emit(type) {
    if (this.event[type]) {
      this.event[type].forEach((cb) => cb())
    }
  }

  off(fn, type) {
    if (!this.event[type]) return;
    this.event[type] = this.event[type].filter((item) => item !== fn)
  }


  once(fn, type) {
    function tt() {
      fn();
      this.off(tt, type)
    }

    this.on(tt, type)
  }

}