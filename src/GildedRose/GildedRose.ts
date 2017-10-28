import Item from './Item';
import ItemUpdater from './ItemUpdater';

export default function GildedRose(items) {

  return {
    updateQuality
  }

  function updateQuality() {
    for (let i = 0; i < items.length; i++) {
      ItemUpdater(items[i]);
    }
  }
  
}
