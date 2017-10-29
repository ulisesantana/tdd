export default class Counter {
  private _number: number;

  constructor(number: number) {
    this._number = number;
  }

  get value(): number {
    return this._number;
  }

  set value(number: number) {
    this._number = number;
  }

  public increase(num: number = 1): void {
    this.value += num;
  }

  public decrease(num: number = 1): void {
    this.value -= num;
  }
}