class Counter {
  private count;
  constructor(count?: number) {
    this.count = count;
  }
  setCount(count?: number) {
    this.count = count;
  }
  countDown() {
    this.count -= 1;
  }
  getCount() {
    return this.count;
  }
  isEnd() {
    return this.count <= 0;
  }
}

export default Counter;
