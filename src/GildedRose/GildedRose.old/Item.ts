import itemUpdater from './ItemUpdater';

export default function Item(name: string, sellIn: number, quality: number) {
  return {
    name: name,
    sellIn: sellIn,
    quality: quality,
    passDay: () => {
      itemUpdater(this);
    },
    print: function print() {
      return name + ", " + sellIn + ", " + quality;
    }
  }
};