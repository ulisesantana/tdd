import Item from './Item';

export default class Conjured extends Item {
  constructor(sellIn: number, quality: number) {
    super("Conjured", sellIn, quality);
  }

  public decreaseQuality(num: number = 1): void {
    if (this.quality > 0) {
      this._quality.decrease(num * 2);
    }
  }
}