class Cart{ // class is an object generator
  #localStorageKey; // private property
  cartItems= undefined;
  
  constructor(localStorageKey){
    this.#localStorageKey = localStorageKey;
  }
  saveToStorage(){
    localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItems));
  }
  addToCart(productId, quantity){
    let matchingItem;

    this.cartItems.forEach((cartItem)=>{ 
      if(productId === cartItem.productId){
        matchingItem = cartItem; // check for the same items, if true, then add quantity, else add new element
      }
    });
    if(matchingItem){
      matchingItem.quantity += quantity;
    } else{
      this.cartItems.push({
      productId,
      quantity,
      deliveryOptionId: '1'
    });
    }
    this.saveToStorage();
  }

  removeFromCart(productId){
    const newCart = [];

    this.cartItems.forEach((cartItem)=>{
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;
    this.saveToStorage();
  }

  updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;

      this.cartItems.forEach((cartItem)=>{ 
        if(productId === cartItem.productId){
          matchingItem = cartItem; // check for the same items, if true, then add to matchingItem, 
        }
      });

      matchingItem.deliveryOptionId = deliveryOptionId;

      this.saveToStorage();
  }

  calculateCartQuantity(){
  let cartQuantity = 0;
  this.cartItems.forEach((cartItem)=>{
      cartQuantity += cartItem.quantity;
    });
  return cartQuantity;
  }

  updateQuantity(productId, newQuantity){ //if product ID matches chosen product id then save the item to cart
    cartItem.forEach((cartItem)=>{
      if(cartItem.productId===productId){
      cartItem.quantity = newQuantity;
      saveToStorage();
      }
    });
  }
}






let cart = new Cart('cart-oop');
let businessCart = new Cart('cart-business');


// console.log(cart); // OOP tries to replicate real world
// console.log(businessCart);