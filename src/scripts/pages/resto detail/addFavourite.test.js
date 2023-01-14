import { addToFavourite, getRestoFavouriteList } from "../../storage";

/* eslint-disable no-undef */
describe("integrate add to favorite button and db", () => {
  beforeEach(() => {
    createStarterEnvironment();
  });

  fit("it should add to db after click", () => {
    const data = {
      id: 1,
    };
    document.querySelector(".favourite-btn").addEventListener("click", async () => {
      await addToFavourite(data);
    });
    document.querySelector(".favourite-btn").dispatchEvent(new Event("click"));
    expect(getRestoFavouriteList()).toEqual([{ ...data }]);
  });
});

const createStarterEnvironment = () => {
  document.body.innerHTML = `
    <button 
        class="button favourite-btn outlined-button"
        data-favourited="false">
        Add Favourite
    </button>
    `;
};
