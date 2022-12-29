import { API_ROUTES } from "../../api";

export const AddReview = {
  init(id) {
    const form = document.querySelector(".customer-review__form");
    const submit = document.querySelector(".customer-review__submit");
    form.addEventListener("submit", async (e) => {
      await this._handleAddReview(e, id);
    });

    submit.addEventListener("click", async (e) => {
      await this._handleAddReview(e, id);
    });
  },
  _handleAddReview(e, id) {
    e.preventDefault();
    const url = API_ROUTES.add;
    const review = document.querySelector(".customer-review__input").value;
    const name = "Irvan";
    const body = {
      id,
      name,
      review,
    };
    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    document.querySelector(".customer-review__input").value = "";
  },
};
