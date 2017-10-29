import GenericItem from './GenericItem';

export default class Sulfuras extends GenericItem {
  constructor(){
    super("Sulfuras, Hand of Ragnaros", 80, 80);
    this.quality = 80;
  }

  public passDay(): void {}
}