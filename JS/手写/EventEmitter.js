/** @format */

class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(name, fn) {
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(fn);
  }
  off(name, fn) {
    if (!this.events[name]) {
      return;
    }
    if (!fn) {
      this.events[name] = this.events[name].filter(cb => cb !== fn);
    } else {
      this.events[name] = [];
    }
  }
  trigger(name) {
    if (!this.events[name] || this.events.length === 0) return;
    this.events[name].forEach(cb => cb());
  }
  once(name, fn) {
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(this.$once(fn));
  }
  $once(fn) {
    let flag = false;
    return function () {
      if (!flag) {
        flag = true;
        return fn();
      }
    };
  }
}

const fn = () => console.log("test");

const ev = new EventEmitter();

ev.once("test", fn);

ev.trigger("test");
ev.trigger("test");
ev.trigger("test");
