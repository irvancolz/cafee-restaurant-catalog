import {
  addToFavourite,
  deleteFromFavourite,
  getRestoFavouriteRegsistry,
} from "../../storage";

export const FavouriteButtonHandler = {
  async _init({ trigger, data }) {
    this._trigger = trigger;
    this._data = data;

    await this.renderButton();
    this._trigger.addEventListener("click", async () => {
      await this._handleClick();
    });
  },

  _renderFavouritedResto() {
    this._trigger.innerHTML = "Favourited";
    this._trigger.setAttribute("data-favourited", "true");
    this._trigger.setAttribute(
      "aria-label",
      "remove this restaurant from favourite"
    );
  },

  _renderUnFavouritedResto() {
    this._trigger.innerHTML = "Add Favourite";
    this._trigger.setAttribute("data-favourited", "false");
    this._trigger.setAttribute(
      "aria-label",
      "add this restaurant to favourite"
    );
  },

  async _handleClick() {
    const buttonAttrIsFavourited =
      this._trigger.getAttribute("data-favourited");
    if (buttonAttrIsFavourited === "true") {
      await deleteFromFavourite(this._data.id);
    } else if (buttonAttrIsFavourited === "false") {
      await addToFavourite(this._data);
    }
    this.renderButton();
  },

  async renderButton() {
    const restaurantIsFavourited = await getRestoFavouriteRegsistry(
      this._data.id
    );
    if (restaurantIsFavourited) {
      this._renderFavouritedResto();
    } else {
      this._renderUnFavouritedResto();
    }
  },
};
