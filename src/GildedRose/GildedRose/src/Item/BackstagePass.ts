import GenericItem from './GenericItem';

export default class BackstagePass extends GenericItem {
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