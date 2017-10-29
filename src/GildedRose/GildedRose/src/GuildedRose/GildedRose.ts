import GenericItem from '../Item/GenericItem';

export default (items: GenericItem[]) => new GildedRose(items);

export class GildedRose{
  private store: GenericItem[];

  constructor(items: GenericItem[]){
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