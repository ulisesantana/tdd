import GenericItem from './GenericItem';

export default class AgedBrie extends GenericItem {
  constructor(sellIn: number, quality: number) {
    super("Aged Brie", sellIn, quality);
  }

  public passDay(): void {
    this.decreaseSellIn();
    this.increaseQuality();
  }
}