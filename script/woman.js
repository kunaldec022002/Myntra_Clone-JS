 
//  let womenCollection = [];

//  onLoad();

//  function onLoad () {

//   displayItemsOnWomenPage();

//  }



//  function addToCollection(womenItemId){
//   womenCollection.push(womenItemId);
//   displayWomenBagIcon()
//   if(addToCollection)
//   {
//     alert("product is add to bag")
//   }
//  }

//  function displayWomenBagIcon()
//  {
//    let bagWomenItemCountElement = document.querySelector('.bag-items-count');
//    bagWomenItemCountElement.innerText = womenCollection.length;
//  }
 
//  function displayItemsOnWomenPage () {

//      let womensItemContainerElement = document.querySelector('.womens-items-container');

//      //variable
 
//      let innerHtml = '';
 
//    womenItems.forEach(womenItem =>{
 
//    innerHtml +=  `
//      <div class="women-item-container">
//           <img src="${womenItem.image}" class="item-img"/>
 
//            <div class="rating">
//             ${womenItem.rating.stars} 🌟| ${womenItem.rating.count}
//            </div>
 
//            <div class="compony-name">${womenItem.company}</div>
 
//            <div class="item-name">${womenItem.item_name}</div>
 
//          <div class="price">
//            <span class="current-price">${womenItem.current_price}</span>
//            <span class="original-price">${womenItem.original_price}</span>
//            <span class="discount">${womenItem.discount_percentage}%(OFF)</span>
//          </div>
 
//            <button class="btn-add-bag" onclick="addToCollection (${womenItem.id})">Add to Bag</button>
//      </div>`
 
//   })
 
//   womensItemContainerElement.innerHTML=innerHtml;

//  }

 
 
 
let womenCollection = [];

onLoad();

function onLoad() {
  displayItemsOnWomenPage(); // Show all items initially.
}

// Function to add an item to the collection
function addToCollection(womenItemId) {
  womenCollection.push(womenItemId);
  displayWomenBagIcon();
  alert("Product added to bag"); // Correcting the alert message
}

// Display women bag icon count
function displayWomenBagIcon() {
  let bagWomenItemCountElement = document.querySelector('.bag-items-count');
  bagWomenItemCountElement.innerText = womenCollection.length;
}

// Display items on the Women’s page with optional search query
function displayItemsOnWomenPage(searchQuery = '') {
  let womensItemContainerElement = document.querySelector('.womens-items-container');

  if (!womensItemContainerElement) {
    return;
  }

  let innerHtml = '';

  // Filter items based on the search query
  let filteredWomenItems = womenItems.filter(womenItem => {
    return womenItem.item_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           womenItem.company.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Generate inner HTML for the filtered items
  filteredWomenItems.forEach(womenItem => {
    innerHtml += `
      <div class="women-item-container">
        <img src="${womenItem.image}" class="item-img"/>

        <div class="rating">
          ${womenItem.rating.stars} 🌟 | ${womenItem.rating.count}
        </div>

        <div class="compony-name">${womenItem.company}</div>

        <div class="item-name">${womenItem.item_name}</div>

        <div class="price">
          <span class="current-price">${womenItem.current_price}</span>
          <span class="original-price">${womenItem.original_price}</span>
          <span class="discount">${womenItem.discount_percentage}%(OFF)</span>
        </div>

        <button class="btn-add-bag" onclick="addToCollection(${womenItem.id})">Add to Bag</button>
      </div>`;
  });

  womensItemContainerElement.innerHTML = innerHtml; // Update the container
}

// Add search functionality
document.getElementById('search-input').addEventListener('input', function() {
  const searchQuery = this.value; // Get the search query
  displayItemsOnWomenPage(searchQuery); // Display filtered items
});
