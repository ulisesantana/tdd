import GenericItem from './GenericItem';

export default class Conjured extends GenericItem {
  constructor(sellIn: number, quality: number) {
    super("Conjured", sellIn, quality);
  }

  public decreaseQuality(num: number = 1): void {
    if (this.quality > 0) {
      this._quality.decrease(num * 2);
    }
  }
}