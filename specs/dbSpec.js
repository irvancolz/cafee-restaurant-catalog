/* eslint-disable no-undef */
import { addToFavourite, getRestoFavouriteList } from "../src/scripts/storage";
describe("Add Movie To Favorite", () => {
  it("should be add resto", async () => {
    addToFavourite({ id: 1 });
    const get = getRestoFavouriteList();
    get.onsuccess = () => {
      expect(get.result).toEqual([{ id: 1 }]);
    };
  });
});
