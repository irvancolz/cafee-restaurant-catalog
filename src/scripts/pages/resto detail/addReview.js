export const AddReview = {
  init() {
    const form = document.querySelector(".customer-review__form");
    const submit = document.querySelector(".customer-review__submit");

    form.addEventListener("submit", (e) => {
      this._handleAddReview(e);
    });

    submit.addEventListener("click", (e) => {
      this._handleAddReview(e);
    });
  },
  _handleAddReview(e) {
    e.preventDefault();
    console.log("review submitted!");
  },
};
