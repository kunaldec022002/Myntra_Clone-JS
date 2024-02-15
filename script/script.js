let itemsContainerElement = document.getElementById('items-container');
//object

let innerHtml= ' ';
items.forEach(item=>{

  innerHtml +=  ` <div class="item-container">
  <img src="${item.image}" class="item-img"/>
  
  <div class="rating">
    ${item.rating.stars} ⭐ | ${item.rating.count}
  </div>
  
  <div class="company-name">${item.company}</div>
  
  <div class="item-name">${item.item_name}</div>
  
  <div class="price">
  
    <span class="current-price">${item.current_price}</span>
  
    <span class="original-price">${item.original_price}</span>
  
    <span class="discount">${item.discount_percentage} %OFF</span>
  </div>
  
  <button type="button" class="btn-add-bag">Add to Bag</button>
  </div> `

});

itemsContainerElement.innerHTML = innerHtml ;