import Item from './Item';

export default class BackstagePass extends Item {
  constructor(sellIn: number, quality: number) {
    super("Backstage passes to a TAFKAL80ETC concert", sellIn, quality);
  }

  public passDay(): void {
    this.decreaseSellIn();
    
    if (this.sellIn < 1) {
      this.quality = 0;
    } else {
      this.increaseQuality();
      
      if (this.sellIn < 11) {
        this.increaseQuality();
      }
      
      if (this.sellIn < 6) {
        this.increaseQuality();
      }
    }

  }
}