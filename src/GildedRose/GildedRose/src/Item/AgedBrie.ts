import Item from './Item';

export default class AgedBrie extends Item {
  constructor(sellIn: number, quality: number) {
    super("Aged Brie", sellIn, quality);
  }

  public passDay(): void {
    this.decreaseSellIn();
    this.increaseQuality();
  }
}