import Item from '../Item/Item';

export default (items: Item[]) => (new GildedRose(items));

export class GildedRose{
  private store: Item[];

  constructor(items: Item[]){
    this.store = items;
  }

  updateQuality() {
    console.log("One day pass on Gilded Rose Inn");
    this.store.forEach(item => {
      item.passDay();
      console.log(item.print());
    });
  }
}