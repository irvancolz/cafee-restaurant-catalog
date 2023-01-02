/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import { addToFavourite, getRestoFavouriteList } from "./db";

describe("Add Movie To Favourite", () => {
  it("should add resto", () => {
    addToFavourite({ id: 1 });
    const list = getRestoFavouriteList();
    list.onsuccess = async () => {
      expect(await list.result).toEqual([{ id: 1 }]);
    };
  });
});
