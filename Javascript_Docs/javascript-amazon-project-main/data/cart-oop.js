function Cart(localStorageKey){ // use pascal case for things that generate objects
  const cart = { 
  cartItems: JSON.parse(localStorage.getItem(localStorageKey))||[{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 2,
  deliveryOptionId: '1'
  },{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
    deliveryOptionId: '2'
    
  }], // use this variable outside};

  saveToStorage(){
    localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
  },

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
  },

  removeFromCart(productId){
    const newCart = [];

    this.cartItems.forEach((cartItem)=>{
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;
    this.saveToStorage();
  },

  updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;

      this.cartItems.forEach((cartItem)=>{ 
        if(productId === cartItem.productId){
          matchingItem = cartItem; // check for the same items, if true, then add to matchingItem, 
        }
      });

      matchingItem.deliveryOptionId = deliveryOptionId;

      this.saveToStorage();
  },
  calculateCartQuantity(){
  let cartQuantity = 0;
  this.cartItems.forEach((cartItem)=>{
      cartQuantity += cartItem.quantity;
    });
  return cartQuantity;
  },
  updateQuantity(productId, newQuantity){ //if product ID matches chosen product id then save the item to cart
    cartItem.forEach((cartItem)=>{
      if(cartItem.productId===productId){
      cartItem.quantity = newQuantity;
      saveToStorage();
      }
    });
  }
};


return cart;
}


const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

console.log(cart); // OOP tries to replicate real world
console.log(businessCart);