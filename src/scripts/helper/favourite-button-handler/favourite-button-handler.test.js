import { deleteFromFavourite, getRestoFavouriteList } from "../../storage";
import { FavouriteButtonHandler } from "./favourite-button-handler";

/* eslint-disable no-undef */
describe("integrate favourite db with DOM", () => {
  const createFavBtn = () => {
    document.body.innerHTML = '<button id="triggerBtn"><button>';
  };

  beforeEach(async () => {
    createFavBtn();
  });

  test("make sure if the 'add to Favourite' button is present", async () => {
    const btn = document.getElementById("triggerBtn");
    await FavouriteButtonHandler._init({
      trigger: btn,
      data: { id: 1 },
    });
    expect(btn.getAttribute("data-favourited")).toBe("false");
  });

  test("make sure if the 'favourited' button is not present in the begining", async () => {
    const btn = document.getElementById("triggerBtn");
    await FavouriteButtonHandler._init({
      trigger: btn,
      data: { id: 1 },
    });
    expect(document.querySelector('[data-favourited="true"]')).toBeFalsy();
  });

  test("add data to db when 'add to Favourite' button is clicked", async () => {
    const btn = document.getElementById("triggerBtn");
    await FavouriteButtonHandler._init({
      trigger: btn,
      data: { id: 1 },
    });
    btn.dispatchEvent(new Event("click"));
    expect(await getRestoFavouriteList()).toEqual([{ id: 1 }]);
    deleteFromFavourite(1);
  });
});
