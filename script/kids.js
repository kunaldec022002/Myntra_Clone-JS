 
 let kidCollection = [];

 onLoad();

 function onLoad () {

  displayItemsOnKidPage();

 }



 function addToCollection(kidItemId){
  kidCollection.push(kidItemId);
  displayKidBagIcon()
  if(addToCollection)
  {
    alert("product is add to bag")
  }
 }

 function displayKidBagIcon()
 {
   let bagKidItemCountElement = document.querySelector('.bag-items-count');
   bagKidItemCountElement.innerText = kidCollection.length;
 }
 
 function displayItemsOnKidPage () {

     let kidsItemContainerElement = document.querySelector('.kids-items-container');

     //variable
 
     let innerHtml = '';
 
   kidItems.forEach(kidItem =>{
 
   innerHtml +=  `
     <div class="kid-item-container">
          <img src="${kidItem.image}" class="item-img"/>
 
           <div class="rating">
            ${kidItem.rating.stars} 🌟| ${kidItem.rating.count}
           </div>
 
           <div class="compony-name">${kidItem.company}</div>
 
           <div class="item-name">${kidItem.item_name}</div>
 
         <div class="price">
           <span class="current-price">${kidItem.current_price}</span>
           <span class="original-price">${kidItem.original_price}</span>
           <span class="discount">${kidItem.discount_percentage}%(OFF)</span>
         </div>
 
           <button class="btn-add-bag" onclick="addToCollection (${kidItem.id})">Add to Bag</button>
     </div>`
 
  })
 
  kidsItemContainerElement.innerHTML=innerHtml;

 }

 
 
 
 
