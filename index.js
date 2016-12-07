var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0; i < cart.length; i++) {
    for (var item in cart) {
      t += cart.item
    }
  }
  return t
}

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor((Math.random() * 100) + 1);
  cart.push({item: price});
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart(){
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  for(var item in cart) {
    console.log(`In your cart you have ${item} at ${cart.item}`);
  }
}

function removeFromCart(item){
  if(cart.hasOwnProperty('item')){
      delete cart.item;
    }
    else {
      console.log("That item is not in your cart.");
    }
    return cart
}


function placeOrder(cardNumber){
  if (typeof cardNumber === 'number') {
    var t = total();
    console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`);
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  var cart = [];
  return cart
}
