const Item = require('./Item');


export default function GildedRose(items) {

  return {
    updateQuality
  }

  function updateQuality() {
    for (let i = 0; i < items.length; i++) {
      updateItem(items[i]);
    }
  }

  function isAgedBrie(item) {
    return item.name === "Aged Brie"
  }

  function isBackstagePass(item) {
    return item.name === "Backstage passes to a TAFKAL80ETC concert"
  }

  function isSulfuras(item) {
    return item.name === "Sulfuras, Hand of Ragnaros";
  }

  function increaseQuality(item) {
    item.quality++;
    return item;
  }

  function decreaseQuality(item) {
    item.quality--;
    return item;
  }

  function hasntMaxQuality(item) {
    return item.quality < 50
  }

  function decreaseSellIn(item) {
    item.sellIn--;
    return item;
  }

  function updateItem(item) {
    if (!isAgedBrie(item) && !isBackstagePass(item)) {
      if (item.quality > 0) {
        if (!isSulfuras(item)) {
          item = decreaseQuality(item);
        }
      }
    } else {
      if (hasntMaxQuality(item)) {
        item = increaseQuality(item);

        if (isBackstagePass(item)) {
          if (item.sellIn < 11) {
            item = increaseQuality(item);
          }

          if (item.sellIn < 6) {
            item = increaseQuality(item);
          }
        }
      }
    }

    if (!isSulfuras(item)) {
      item = decreaseSellIn(item);
    }

    if (item.sellIn < 0) {
      if (isAgedBrie(item) && hasntMaxQuality(item)) {
        increaseQuality(item)
      }
      else if (isBackstagePass(item)) {
        item.quality = 0;
      }
      else if (item.quality > 0 && !isSulfuras(item)) {
        item = decreaseQuality(item);
      }
    }

  }
}
