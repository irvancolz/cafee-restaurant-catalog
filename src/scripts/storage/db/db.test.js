/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import { addToFavourite, deleteFromFavourite, getRestoFavouriteList } from "./db";

describe("Add Restaurant To Favourite", () => {
  test("should add resto", async () => {
    await addToFavourite({ id: 1 });
    const list = await getRestoFavouriteList();
    expect(list).toEqual([{ id: 1 }]);
    deleteFromFavourite(1);
  });
  test("dont add when undefined", async () => {
    const resto = undefined;
    addToFavourite(resto);
    expect(await getRestoFavouriteList()).toEqual([]);
  });
});
describe("Retrieve Specific Restaurant", () => {
  test("show asked restaurant", async () => {
    await addToFavourite({ id: 1 });
    const list = await getRestoFavouriteList();
    expect(list).toEqual([{ id: 1 }]);
    deleteFromFavourite(1);
  });
  test("dont add when undefined", async () => {
    const resto = undefined;
    addToFavourite(resto);
    expect(await getRestoFavouriteList()).toEqual([]);
  });
});
describe("Add Movie To Favourite", () => {
  test("should add resto", async () => {
    await addToFavourite({ id: 1 });
    const list = await getRestoFavouriteList();
    expect(list).toEqual([{ id: 1 }]);
    deleteFromFavourite(1);
  });
  test("dont add when undefined", async () => {
    const resto = undefined;
    addToFavourite(resto);
    expect(await getRestoFavouriteList()).toEqual([]);
  });
});
