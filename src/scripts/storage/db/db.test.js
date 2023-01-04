/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import { addToFavourite, getRestoFavouriteList } from "./db";

describe("Add Movie To Favourite", () => {
  test("should add resto", async () => {
    await addToFavourite({ id: 1 });
    const list = getRestoFavouriteList();
    await expect(list.result).resolves.toEqual({ id: 1 });
  });
});
