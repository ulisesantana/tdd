
export default function Item(name: string, sellIn: number, quality: number) {
  return {
    name: name,
    sellIn: sellIn,
    quality: quality,
    print: function print() {
      return name + ", " + sellIn + ", " + quality;
    }
  }
};