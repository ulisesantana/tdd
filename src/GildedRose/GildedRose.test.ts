'use strict';

import GildedRose from './GildedRose';
import * as assert from 'assert';
import Item from './Item';

function passDay(item : Object) {
  GildedRose([item]).updateQuality();
}

describe("Gilded Rose", function () {
  it('green test', function () {
    const expect = true;
    assert.deepEqual(true, expect);
  });

  it('Quality should decrease by 2', function () {
    let item = Item("Bread",-1,50);
    passDay(item);

    assert.deepEqual(item.quality, 48);
  });

  it('Item properties should decrease', function () {
    let item = Item("Bread",1,50);
    passDay(item);    

    assert.deepEqual(item.quality, 49);
    assert.deepEqual(item.sellIn, 0);
  });

  it('"Aged Brie" increases in Quality the older it gets', function () {
    let item = Item("Aged Brie",10,40);
    passDay(item);    

    assert.deepEqual(item.quality, 41);
  });

  it('The Quality of an item is never negative', function () {
    let item = Item("Bread",10,0);
    passDay(item);

    assert.deepEqual(item.quality, 0);
  });

  it('The Quality of an item is never more than 50', function () {
    let backstagePass = Item("Backstage passes to a TAFKAL80ETC concert",10,50);
    let agedBrie = Item("Aged Brie",10,50);

    passDay(backstagePass);
    passDay(agedBrie);

    assert.deepEqual(backstagePass.quality, 50);
    assert.deepEqual(agedBrie.quality, 50);
  });

  it('"Sulfuras" never has to be sold or decreases in Quality', function () {
    let item = Item("Sulfuras, Hand of Ragnaros",10,10);
    passDay(item);

    assert.deepEqual(item.quality, 10);
    assert.deepEqual(item.sellIn, 10);
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

    it("By 3 when there are 5 days or less but", () => {
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
