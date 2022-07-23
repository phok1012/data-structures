class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.entered = 0;
    this.exited = 0;
  }

  enqueue(value) {
    this.entered ++;
    this.storage[this.entered] = value;
  }

  dequeue() {
    if(this.size() > 0) {
      this.exited ++;
      var leaving = this.storage[this.exited];
      delete this.storage[this.exited];
      return leaving;
    }
  }

  size() {
    return this.entered - this.exited;
  }

}
