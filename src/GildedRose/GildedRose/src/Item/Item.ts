import Counter from './../../lib/Counter/Counter'
import GenericItem from './GenericItem';
import AgedBrie from './AgedBrie';
import BackstagePass from './BackstagePass';
import Sulfuras from './Sulfuras';
import Conjured from './Conjured';

export default (name, sellIn = 1, quality = 1) => Item.factory(name,sellIn,quality);

export class Item {
  constructor(){}
  
  static factory(name: string, sellIn: number = 1, quality: number = 1): GenericItem {
    switch (name) {
      case "Aged Brie":
        return new AgedBrie(sellIn, quality);
      case "Backstage passes to a TAFKAL80ETC concert":
        return new BackstagePass(sellIn, quality);
      case "Conjured":
        return new Conjured(sellIn, quality);
      case "Sulfuras, Hand of Ragnaros":
        return new Sulfuras();
      default:
        return new GenericItem(name, sellIn, quality);
    }
  }
}
