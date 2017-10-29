import GildedRose from './src/GuildedRose/GildedRose';
import ItemFactory from './src/Item/Item.factory';

let store = [
  ItemFactory("Bread", 2, 2),
  ItemFactory("Salad", 3, 5),
  ItemFactory("Backstage passes to a TAFKAL80ETC concert", 15, 30),
  ItemFactory("Conjured", 10, 10),
  ItemFactory("Sulfuras, Hand of Ragnaros"),
  ItemFactory("Aged Brie", 12, 20),
  ItemFactory("Milk", 8, 25),
];

setInterval(() => {
  GildedRose(store).updateQuality();
}, 5000);
