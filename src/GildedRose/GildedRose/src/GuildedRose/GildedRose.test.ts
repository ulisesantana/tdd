import GildedRose from './GildedRose';
import * as assert from 'assert';
import Item from './../Item/Item';

function passDay(item) {
  GildedRose([item]).updateQuality();
}

describe("Gilded Rose", () => {
  it('green test', () => {
    const expect = true;
    assert.deepEqual(true, expect);
  });
  
  describe("Generic items", () => {
    it('Item properties should decrease', () => {
      let item = Item("Bread",1,50);
      passDay(item);    
  
      assert.deepEqual(item.sellIn, 0);
      assert.deepEqual(item.quality, 48);
    });
    
    it('Quality should decrease by 2 when item date expires', () => {
      let item = Item("Bread",0,50);
      passDay(item);
  
      assert.deepEqual(item.quality, 48);
    });
  
    
    it('The Quality of an item is never negative', () => {
      let item = Item("Bread",10,0);
      passDay(item);
      
      assert.deepEqual(item.quality, 0);
    });
    
    it('The Quality of an item is never more than 50', () => {
      let backstagePass = Item("Backstage passes to a TAFKAL80ETC concert",10,50);
      let agedBrie = Item("Aged Brie",10,50);
      let generic = Item("Bread",10,200);
      
      passDay(backstagePass);
      passDay(agedBrie);
      passDay(generic);
      
      assert.deepEqual(backstagePass.quality, 50);
      assert.deepEqual(agedBrie.quality, 50);
      assert.deepEqual(generic.quality, 49);
    });
  });
  
  describe("Aged Brie", () => {
    it('"Aged Brie" increases in Quality the older it gets', () => {
      let item = Item("Aged Brie",10,40);
      passDay(item);    
  
      assert.deepEqual(item.quality, 41);
    });
  });
  
  describe("Sulfuras", () => {
    it('"Sulfuras" never has to be sold or decreases in Quality', () => {
      let item = Item("Sulfuras, Hand of Ragnaros");
      passDay(item);
  
      assert.deepEqual(item.quality, 80);
      assert.deepEqual(item.sellIn, 80);
    });
  });
  
  describe("Conjured", () => {
    it('"Conjured" items degrade in Quality twice as fast as normal items', () => {
      let item = Item("Conjured", 10, 10);
      let expiredItem = Item("Conjured", 0, 10);
      passDay(item);
      passDay(expiredItem);
  
      assert.deepEqual(item.quality, 8);
      assert.deepEqual(expiredItem.quality, 6);
    });
  });

  describe("Backstage passes", () => {

    it("Increases in Quality as it's SellIn value approaches", () => {
      let item = Item("Backstage passes to a TAFKAL80ETC concert", 20, 4);
      passDay(item);

      assert.deepEqual(item.quality, 5);
    });

    it("Quality increases by 2 when there are 10 days or less", () => {
      let item = Item("Backstage passes to a TAFKAL80ETC concert", 10, 4);
      passDay(item);

      assert.deepEqual(item.quality, 6);
    });

    it("Quality increases by 3 when there are 5 days or less but", () => {
      let item = Item("Backstage passes to a TAFKAL80ETC concert", 5, 4);
      passDay(item);

      assert.deepEqual(item.quality, 7);
    });

    it("Quality drops to 0 after the concert", () => {
      let item = Item("Backstage passes to a TAFKAL80ETC concert", 0, 20);
      passDay(item);

      assert.deepEqual(item.quality, 0);
    });

  })



});
