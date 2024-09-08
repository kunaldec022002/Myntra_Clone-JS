 
 let menCollection = [];

 onLoad();

 function onLoad () {

  displayItemsOnMenPage();

 }



 function addToCollection(menItemId){
  menCollection.push(menItemId);
  displayMenBagIcon()
 }

 function displayMenBagIcon()
 {
   let bagMenItemCountElement = document.querySelector('.bag-items-count');
   bagMenItemCountElement.innerText = menCollection.length;
 }
 
 function displayItemsOnMenPage () {

     let mensItemContainerElement = document.    querySelector('.mens-items-container');

     //variable
 
     let innerHtml = '';
 
   menItems.forEach(menItem =>{
 
   innerHtml +=  `
     <div class="men-item-container">
          <img src="${menItem.image}" class="item-img"/>
 
           <div class="rating">
            ${menItem.rating.stars} 🌟| ${menItem.rating.count}
           </div>
 
           <div class="compony-name">${menItem.company}</div>
 
           <div class="item-name">${menItem.item_name}</div>
 
         <div class="price">
           <span class="current-price">${menItem.current_price}</span>
           <span class="original-price">${menItem.original_price}</span>
           <span class="discount">${menItem.discount_percentage}%(OFF)</span>
         </div>
 
           <button class="btn-add-bag" onclick="addToCollection (${menItem.id})">Add to Bag</button>
     </div>`
 
  })
 
  mensItemContainerElement.innerHTML=innerHtml;

 }

 
 
 
 
