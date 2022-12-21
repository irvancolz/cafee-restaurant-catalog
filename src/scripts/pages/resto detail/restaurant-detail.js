function createRestaurantDetailMainContent(data) {
  return ` 
    <img src="https://restaurant-api.dicoding.dev/images/large/${data.pictureId}" alt="${data.name} resto images"/>
    <p class="article">${data.description}</p>
    
    <div class="detail"> 
      <h1>${data.name}</h1>
      
      <div>
        <p>${data.city}</p>
        <p>${data.address}</p>
        <div>
          <p>${data.rating}</p>
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
        </div>
        
        <div>
            <button aria-label="book table">Book Table</button>
            <button aria-label="add this restaurant to favourite">Add Favourite</button>
        </div>
        
        <p class="article">${data.description}</p>
        
        <h2>Foods</h2>
        <ul class="foods_container">
        </ul>
        
        <h2>Drinks</h2>
        <ul class="drinks_container">
        </ul>
        
        <h2>Categories</h2>
        <ul class="categories_container">
        </ul>

      </div>
    </div>`;
}

function createContentFromList(list, container) {
  console.log(list);
  list.forEach((content) => {
    const item = document.createElement("li");
    item.innerText = content.name;
    container.append(item);
  });
}

export { createRestaurantDetailMainContent, createContentFromList };
