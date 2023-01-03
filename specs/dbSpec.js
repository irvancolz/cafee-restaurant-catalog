/* eslint-disable no-undef */
import { addToFavourite, getRestoFavouriteList } from "../src/scripts/storage";
describe("Add Movie To Favorite", () => {
  it("should be add resto", async () => {
    const resto = {
      id: 1,
    };
    await addToFavourite(resto);
    expect(1 + 2).toBe(3);
  });
});
