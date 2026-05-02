import { cart, removeFromCart, updateQuantity, calculateCartQuantity, updateDeliveryOption } from "../../data/cart.js";
import { products, getProduct} from "../../data/products.js";
import { formatCurrency } from "../../utils/money.js";
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import { deliveryOptions, getDeliveryOption, calculateDeliveryDate } from "../../data/deliveryOptions.js";
// we use the default export when we only use one export
import { renderPaymentSummary } from "./paymentsummary.js";
import { renderCheckoutHeader } from "./checkoutheader.js";

export function renderOrderSummary(){
  let cartSummaryHTML = '';
  cart.forEach((cartItem)=>{
    const productId = cartItem.productId;
    let matchingProduct = getProduct(productId);
    products.forEach((product)=>{
      if(product.id===productId){
        matchingProduct = product;
      }
    });
    
    
    const deliveryOptionId = cartItem.deliveryOptionId;


    const deliveryOption= getDeliveryOption(deliveryOptionId);
    
    cartSummaryHTML += `<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: ${calculateDeliveryDate(deliveryOption)}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-quantity-link" data-product-id=${matchingProduct.id}>
              Update
            </span>
            <input class="quantity-input">
            <span class="save-quantity-link link-primary js-save-quantity-link" data-product-id=${matchingProduct.id}>Save</span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id=${matchingProduct.id}>
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${deliveryOptionsHTML(matchingProduct, cartItem)}
        </div>
      </div>
    </div>`;
  });

  function deliveryOptionsHTML(matchingProduct, cartItem){
    let html = '';
    deliveryOptions.forEach((deliveryOption)=>{
      

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
      const priceString = deliveryOption.priceCents === 0? 'FREE':`${matchingProduct.getPrice()} - `;
      html +=`
      <div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
        <input type="radio" 
        ${isChecked ? 'checked' : ''} class="delivery-option-input"
          name="delivery-option-${matchingProduct.id}">
        <div>
          <div class="delivery-option-date">
            ${calculateDeliveryDate(deliveryOption)}
          </div>
          <div class="delivery-option-price">
            ${priceString} Shipping
          </div>
        </div>
      </div>`;
    });
    return html;
  }
  document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
  document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click',()=>{ // when clicked delete
      const productId = link.dataset.productId;
      removeFromCart(productId);
      updateCartQuantity();
      renderOrderSummary();
      renderPaymentSummary();
      renderCheckoutHeader();
      
    });
  });

  document.querySelectorAll('.js-update-quantity-link').forEach((link)=>{
    link.addEventListener('click',()=>{
      const productId = link.dataset.productId;
      const container=document.querySelector(`.js-cart-item-container-${productId}`);
      container.classList.add('is-editing-quantity');
      updateCartQuantity();
      saveQuantity(link);
      
    });
  });






  document.querySelectorAll('.js-save-quantity-link').forEach((link)=>{
    link.addEventListener('click',()=>{
      
      hideQuantityInput(link);
      saveQuantity(link);
      updateCartQuantity();
      renderOrderSummary();
      renderCheckoutHeader();
      renderPaymentSummary();
    });
    document.querySelectorAll('.quantity-input').forEach((input)=>{
    
    input.addEventListener('keydown',(event)=>{
      if(event.key ==='Enter'){
        hideQuantityInput(link);
        saveQuantity(link);
        updateCartQuantity();
        renderOrderSummary();
        renderCheckoutHeader();
        renderPaymentSummary();
      }
    });
    });
  });

  function hideQuantityInput(link){
    const productId = link.dataset.productId;
    const container=document.querySelector(`.js-cart-item-container-${productId}`);
    container.classList.remove('is-editing-quantity');
  }
  function saveQuantity(link){

    let quantityInput = Number(document.querySelector('.quantity-input').value);
    if(quantityInput>0 & quantityInput<=1000){
      const productId = link.dataset.productId;
      let newQuantity = Number(document.querySelector('.quantity-input').value); // assign the value of the input
      document.querySelector('.quantity-label').innerHTML= Number(document.querySelector('.quantity-input').value);
      updateQuantity(productId, newQuantity);
      
      updateCartQuantity();
      
    }
    

  }



  updateCartQuantity();
  function updateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  renderCheckoutHeader();
  }
  renderCheckoutHeader();

  document.querySelectorAll('.js-delivery-option').forEach((element)=>{
    element.addEventListener('click', ()=>{
      const {productId, deliveryOptionId} = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary(); // function can rerun inside itself called recursion, MVC, model view controller, popular method, model saves and manages data, view, take data and display it, controller, run code when interacting with the page
      renderPaymentSummary();
    });
  });
  
}
