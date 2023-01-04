/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import {
  addToFavourite,
  deleteFromFavourite,
  getRestoFavouriteList,
  getRestoFavouriteRegsistry,
} from "./db";

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
    const result = getRestoFavouriteRegsistry(1);
    expect(await result).toEqual({ id: 1 });
    deleteFromFavourite(1);
  });
  test("dont retirieve when undefined", async () => {
    const resto = undefined;
    addToFavourite({ id: 1 });
    expect(await getRestoFavouriteRegsistry(resto)).toEqual(undefined);
    deleteFromFavourite(1);
  });
});

describe("Delete Movie from Favourite", () => {
  test("should delete resto", async () => {
    await addToFavourite({ id: 1 });
    await addToFavourite({ id: 2 });
    await addToFavourite({ id: 3 });
    await deleteFromFavourite(3);
    const list = await getRestoFavouriteList();
    expect(list).toEqual([{ id: 1 }, { id: 2 }]);
    list.forEach((item) => deleteFromFavourite(item.id));
  });
  test("dont delete when undefined", async () => {
    const resto = undefined;
    addToFavourite(resto);
    expect(await getRestoFavouriteList()).toEqual([]);
  });
});
