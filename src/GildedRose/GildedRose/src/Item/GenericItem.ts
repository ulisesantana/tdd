import Counter from './../../lib/Counter/Counter'

export default class GenericItem {
  private _name: string;
  private _sellIn: Counter;
  private _quality: Counter;

  constructor(name: string, sellIn: number = 1, quality: number = 1) {
    quality = quality > 0 ? (quality < 51 ? quality : 50) : 0;
    sellIn > 0 ? sellIn : 0;
    this._name = name;
    this._sellIn = new Counter(sellIn);
    this._quality = new Counter(quality);
  }

  get name(): string {
    return this._name;
  }

  get sellIn(): number {
    return this._sellIn.value;
  }

  get quality(): number {
    return this._quality.value;
  }

  set quality(quality: number) {
    this._quality.value = quality;
  }

  public print() {
    return this.name + ", " + this.sellIn + ", " + this.quality;
  }

  public passDay(): void {
    this.decreaseSellIn();

    if (this.sellIn < 1) {
      this.decreaseQuality(2);
    } else {
      this.decreaseQuality();
    }

  }

  public increaseQuality() {
    if (this.hasLessThanMaxQuality()) {
      this._quality.increase();
    }
  }

  public decreaseQuality(num: number = 1) {
    if (this.quality > 0) {
      this._quality.decrease(num);
    }
  }

  public decreaseSellIn(num: number = 1) {
    this._sellIn.decrease(num);
  }

  private hasLessThanMaxQuality(): boolean {
    return this.quality < 50
  }
}
