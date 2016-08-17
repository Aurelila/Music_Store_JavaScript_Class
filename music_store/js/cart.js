//function addToCart() {
//	'use strict';
	//alert("Calling the add function.");
//}

//function removeFromCart() {
	//'use strict';
	//alert("Calling the remove function.");
//}

//function getItems() {
	//'use strict';
	//alert("Calling the get items function.");
//}

//function getTotal() {
	//'use strict';
	//alert("Calling the get total function.");
//}

//function load() {
	//'use strict';
//	addToCart();
//	removeFromCart();
//	getItems();
//	getTotal();
//}

var count = 0

function sendToCart(id) {
  'use strict';
  // Add item to sessionStorage
  // Update inner html
  var items = document.getElementById('cartNumber').value;
    sessionStorage.setItem('cartList', items);

    document.getElementById('cartNumber').innerHTML = items + count++;

      }


function listenerForI(i) {
  document.getElementById(i).addEventListener('click', function() {sendToCart(i);}, false)  ;

}


window.onload = function () {

    var addButton = document.getElementsByClassName('addBtn');
    // Create a loop to go through all the items in the array
     for(var i=0; i < addButton.length; i++)
     {
      //Create all the button click listeners

         listenerForI(addButton[i].id.toString());
      }

    }


