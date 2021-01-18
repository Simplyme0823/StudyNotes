/** @format */

class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(name, fn) {
    this.events[name] = this.events[name] || [];
    this.events[name].push(fn);
  }
  off(name, fn) {
    const ev = this.events[name];
    if (!ev) return;
    if (!fn) {
      this.events[name] = [];
    } else {
      this.events[name] = ev.filter(item => item !== fn);
    }
  }
  fire(name) {
    const ev = this.events[name];
    if (!ev) return;
    ev.forEach(item => item());
  }
  once(name, fn) {
    this.events[name] = this.events[name] || [];
    function onceFn() {
      let flag = false;
      return function () {
        if (!flag) {
          fn();
        }
        flag = true;
      };
    }
    this.events[name].push(onceFn());
  }
}
