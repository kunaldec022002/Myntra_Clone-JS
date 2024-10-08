

//Array
let bagItems;

onLoad();

function onLoad()
{
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

  displayItemsOnHomePage();
  displayBagIcon();
}




function addToBag (itemId)
{
 bagItems.push(itemId);
 localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();

  if (addToBag)
  {
    alert('product is add to bag')
  }
}

function displayBagIcon()
{
   let bagItemCountElement = document.querySelector('.bag-items-count');

   if (bagItems.length > 0)
   {
     bagItemCountElement.innerText = bagItems.length;
     bagItemCountElement.style.visibility = 'visible';
   }
   else{
        bagItemCountElement.style.visibility = 'hidden';
   }
}



function displayItemsOnHomePage ()
{
  let itemsContainerElement = document.getElementById('items-container');

  
  if (!itemsContainerElement)
  {
    return;
  };




  //object
  
  let innerHtml= ' ';

  items.forEach(item=>{
  
    innerHtml +=  ` <div class="item-container">
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
    </div> `
  
  });
  
  itemsContainerElement.innerHTML = innerHtml ;
}



