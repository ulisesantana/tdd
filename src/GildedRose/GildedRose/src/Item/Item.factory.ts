import Counter from './../../lib/Counter/Counter'
import Item from './Item';
import AgedBrie from './AgedBrie';
import BackstagePass from './BackstagePass';
import Sulfuras from './Sulfuras';
import Conjured from './Conjured';

export default function(name: string, sellIn: number = 1,  quality: number = 1): Item {
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
      return new Item(name, sellIn, quality);
  }
};