

// //Array
// let bagItems;

// onLoad();

// function onLoad()
// {
//   let bagItemsStr = localStorage.getItem('bagItems');
//   bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

//   displayItemsOnHomePage();
//   displayBagIcon();
// }




// function addToBag (itemId)
// {
//  bagItems.push(itemId);
//  localStorage.setItem('bagItems', JSON.stringify(bagItems));
//   displayBagIcon();

//   if (addToBag)
//   {
//     alert('product is add to bag')
//   }
// }

// function displayBagIcon()
// {
//    let bagItemCountElement = document.querySelector('.bag-items-count');

//    if (bagItems.length > 0)
//    {
//      bagItemCountElement.innerText = bagItems.length;
//      bagItemCountElement.style.visibility = 'visible';
//    }
//    else{
//         bagItemCountElement.style.visibility = 'hidden';
//    }
// }



// function displayItemsOnHomePage ()
// {
//   let itemsContainerElement = document.getElementById('items-container');

  
//   if (!itemsContainerElement)
//   {
//     return;
//   };




//   //object
  
//   let innerHtml= ' ';

//   items.forEach(item=>{
  
//     innerHtml +=  ` <div class="item-container">
//     <img src="${item.image}" class="item-img"/>
    
//     <div class="rating">
//       ${item.rating.stars} ⭐ | ${item.rating.count}k
//     </div>
    
//     <div class="company-name">${item.company}</div>
    
//     <div class="item-name">${item.item_name}</div>
    
//     <div class="price">
    
//       <span class="current-price">${item.current_price}</span>
    
//       <span class="original-price">${item.original_price}</span>
    
//       <span class="discount">${item.discount_percentage} %OFF</span>
//     </div>
    
//     <button type="button" class="btn-add-bag" onClick="addToBag(${item.id})">Add to Bag</button>
//     </div> `
  
//   });
  
//   itemsContainerElement.innerHTML = innerHtml ;
// }

let bagItems;

onLoad();

// Initial load function
function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

  displayItemsOnHomePage(); // Display all items initially.
  displayBagIcon();
}

// Function to add an item to the bag
function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();

  if (addToBag) {
    alert('Product added to bag');
  }
}

// Function to update the bag icon's item count
function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-items-count');

  if (bagItems.length > 0) {
    bagItemCountElement.innerText = bagItems.length;
    bagItemCountElement.style.visibility = 'visible';
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

// Function to display items based on an optional search query
function displayItemsOnHomePage(searchQuery = '') {
  let itemsContainerElement = document.getElementById('items-container');

  if (!itemsContainerElement) {
    return;
  };

  let filteredItems = items.filter(item => {
    // Convert both item name and company name to lowercase for easier matching
    return item.item_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           item.company.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Construct inner HTML
  let innerHtml = '';
  filteredItems.forEach(item => {
    innerHtml += `
      <div class="item-container">
        <img src="${item.image}" class="item-img"/>
        
        <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}k
        </div>
        
        <div class="company-name">${item.company}</div>
        
        <div class="item-name">${item.item_name}</div>
        
        <div class="price">
          <span class="current-price">${item.current_price}</span>
          <span class="original-price">${item.original_price}</span>
          <span class="discount">${item.discount_percentage} %OFF</span>
        </div>
        
        <button type="button" class="btn-add-bag" onClick="addToBag(${item.id})">Add to Bag</button>
      </div>`;
  });
  
  // Update the items container
  itemsContainerElement.innerHTML = innerHtml;
}

// Search functionality
document.getElementById('search-input').addEventListener('input', function() {
  const searchQuery = this.value; // Get the search query
  displayItemsOnHomePage(searchQuery); // Display filtered items
});

