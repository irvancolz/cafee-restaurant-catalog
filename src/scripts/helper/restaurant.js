export function createRestaurantCards(data) {
  return `
      <img
        src="https://restaurant-api.dicoding.dev/images/medium/${data.pictureId}"
        alt="${data.name} restaurants"
        loading="lazy"
        title="${data.name} restaurants"
      />
      <section class="restaurants__content">
        <div class="restaurants__header">
          <h3 class="restaurants__title">
            <a href="#/resto/${data.id}" aria-label="link to ${data.name} resto pages">
              ${data.name}
            </a>
          </h3>
          <p class="restaurants__subtitle">
            ${data.city}
            <span>${data.rating}</span>
            <svg
              class="star"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0995 1.79473L13.0245 8.43109L13.1292 8.7918H13.5047H19.8818L14.6757 13.0286L14.4188 13.2376L14.5111 13.5557L16.4703 20.3098L11.4151 16.1958L11.0995 15.9389L10.7839 16.1958L5.72866 20.3097L7.68786 13.5557L7.78013 13.2376L7.52326 13.0286L2.31711 8.7918H8.6942H9.06977L9.1744 8.43109L11.0995 1.79473Z"
                fill="#E1C86C"
                stroke="#E1C86C"
              />
            </svg>
          </p>
        </div>
        <button class="book__btn primary-button" data-id=${data.id}>Book Table</button>
        <p class="restaurants__text">
          ${data.description}
        </p>
      </section>
    `;
}
