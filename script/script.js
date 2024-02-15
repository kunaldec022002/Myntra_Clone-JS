let itemsContainerElement = document.getElementById('items-container');
//object

let item = 
{
  item_image: 'images/1.jpg',
  rating : {
    stars: 4.5,
    noOfReviews :1045,
  },

  company_name : 'Carlton London',
  item_name : 'Rhodium-plated CZ Floral Studs',
  current_price: 606,
  original_price: 1045,
  discount_percentae : 42,
  
}

itemsContainerElement.innerHTML = ` <div class="item-container">
<img src="${item.item_image}" class="item-img"/>

<div class="rating">
  ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
</div>

<div class="company-name">${item.company_name}</div>

<div class="item-name">${item.company_name}</div>

<div class="price">

  <span class="current-price">${item.current_price}</span>

  <span class="original-price">${item.original_price}</span>

  <span class="discount">${item.discount_percentae} %OFF</span>
</div>

<button type="button" class="btn-add-bag">Add to Bag</button>
</div> `; 