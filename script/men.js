 
//  let menCollection = [];

//  onLoad();

//  function onLoad () {

//   displayItemsOnMenPage();

//  }



//  function addToCollection(menItemId){
//   menCollection.push(menItemId);
//   displayMenBagIcon()
//   if(addToCollection)
//   {
//     alert("product is add to bag")
//   }
//  }

//  function displayMenBagIcon()
//  {
//    let bagMenItemCountElement = document.querySelector('.bag-items-count');
//    bagMenItemCountElement.innerText = menCollection.length;
//  }
 
//  function displayItemsOnMenPage () {

//      let mensItemContainerElement = document.querySelector('.mens-items-container');

//      //variable
 
//      let innerHtml = '';
 
//    menItems.forEach(menItem =>{
 
//    innerHtml +=  `
//      <div class="men-item-container">
//           <img src="${menItem.image}" class="item-img"/>
 
//            <div class="rating">
//             ${menItem.rating.stars} 🌟| ${menItem.rating.count}
//            </div>
 
//            <div class="compony-name">${menItem.company}</div>
 
//            <div class="item-name">${menItem.item_name}</div>
 
//          <div class="price">
//            <span class="current-price">${menItem.current_price}</span>
//            <span class="original-price">${menItem.original_price}</span>
//            <span class="discount">${menItem.discount_percentage}%(OFF)</span>
//          </div>
 
//            <button class="btn-add-bag" onclick="addToCollection (${menItem.id})">Add to Bag</button>
//      </div>`
 
//   })
 
//   mensItemContainerElement.innerHTML=innerHtml;

//  }

 
 
let menCollection = [];

onLoad();

function onLoad() {
  displayItemsOnMenPage(); // Show all items initially.
}

// Add to collection function
function addToCollection(menItemId) {
  menCollection.push(menItemId);
  displayMenBagIcon();
  alert("Product added to bag"); // Correcting the alert message
}

// Display men bag icon count
function displayMenBagIcon() {
  let bagMenItemCountElement = document.querySelector('.bag-items-count');
  bagMenItemCountElement.innerText = menCollection.length;
}

// Display items on Men's page with optional search query
function displayItemsOnMenPage(searchQuery = '') {
  let mensItemContainerElement = document.querySelector('.mens-items-container');

  if (!mensItemContainerElement) {
    return;
  }

  let innerHtml = '';

  // Filter items based on the search query
  let filteredMenItems = menItems.filter(menItem => {
    return menItem.item_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           menItem.company.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Generate inner HTML for the filtered items
  filteredMenItems.forEach(menItem => {
    innerHtml += `
      <div class="men-item-container">
        <img src="${menItem.image}" class="item-img"/>

        <div class="rating">
          ${menItem.rating.stars} 🌟 | ${menItem.rating.count}
        </div>

        <div class="compony-name">${menItem.company}</div>

        <div class="item-name">${menItem.item_name}</div>

        <div class="price">
          <span class="current-price">${menItem.current_price}</span>
          <span class="original-price">${menItem.original_price}</span>
          <span class="discount">${menItem.discount_percentage}%(OFF)</span>
        </div>

        <button class="btn-add-bag" onclick="addToCollection(${menItem.id})">Add to Bag</button>
      </div>`;
  });

  mensItemContainerElement.innerHTML = innerHtml; // Update the container
}

// Add search functionality
document.getElementById('search-input').addEventListener('input', function() {
  const searchQuery = this.value; // Get the search query
  displayItemsOnMenPage(searchQuery); // Display filtered items
});
 
