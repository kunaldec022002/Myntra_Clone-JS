 
 let womenCollection = [];

 onLoad();

 function onLoad () {

  displayItemsOnWomenPage();

 }



 function addToCollection(womenItemId){
  womenCollection.push(womenItemId);
  displayWomenBagIcon()
  if(addToCollection)
  {
    alert("product is add to bag")
  }
 }

 function displayWomenBagIcon()
 {
   let bagWomenItemCountElement = document.querySelector('.bag-items-count');
   bagWomenItemCountElement.innerText = womenCollection.length;
 }
 
 function displayItemsOnWomenPage () {

     let womensItemContainerElement = document.querySelector('.womens-items-container');

     //variable
 
     let innerHtml = '';
 
   womenItems.forEach(womenItem =>{
 
   innerHtml +=  `
     <div class="women-item-container">
          <img src="${womenItem.image}" class="item-img"/>
 
           <div class="rating">
            ${womenItem.rating.stars} 🌟| ${womenItem.rating.count}
           </div>
 
           <div class="compony-name">${womenItem.company}</div>
 
           <div class="item-name">${womenItem.item_name}</div>
 
         <div class="price">
           <span class="current-price">${womenItem.current_price}</span>
           <span class="original-price">${womenItem.original_price}</span>
           <span class="discount">${womenItem.discount_percentage}%(OFF)</span>
         </div>
 
           <button class="btn-add-bag" onclick="addToCollection (${womenItem.id})">Add to Bag</button>
     </div>`
 
  })
 
  womensItemContainerElement.innerHTML=innerHtml;

 }

 
 
 
 
