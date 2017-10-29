import Item from './Item';

export default class Sulfuras extends Item {
  constructor(){
    super("Sulfuras, Hand of Ragnaros", 80, 80);
    this.quality = 80;
  }

  public passDay(): void {}
}