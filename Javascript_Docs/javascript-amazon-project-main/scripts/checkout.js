import { renderOrderSummary} from "../checkout/ordersummary.js";
import { renderPaymentSummary } from "../checkout/paymentsummary.js";
import isWeekend from "../checkout/15f.js";
import renamedFunction from "../checkout/15f.js";
import '../data/cart-class.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";
//import '../data/car.js';
//import '../data/backend-practice.js';

async function loadPage(){ // async makes a function return a promise
  try{ // we can use try/catch with synchronous code
    //throw 'error1'; // manually create the error
    await loadProductsFetch(); // await lets us write asynchronous code like normal code, we can only use it when we're inside the async function
    const value = await new Promise((resolve)=>{
      //throw 'error2';
      //reject('error3');
      resolve();
    })
  } 
  
  catch(error){
    console.log('Unexpected error. Please try again later');
  }
  renderOrderSummary();
  renderPaymentSummary();

  
}
loadPage();
/*
Promise.all([ // it lets us run multiple promises at the same time
  // new Promise((resolve)=>{ // when we create the promise it runs the function immediately, so it will run along other functions
  
  // loadProducts(()=>{
  //     resolve('value1'); // it controls when to go to the next step, waits to finish loading
  //   });
  // }),
  loadProductsFetch(),
  new Promise((resolve)=>{
    resolve();
  })
  

]).then((values)=>{
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/
/*new Promise((resolve)=>{ // when we create the promise it runs the function immediately, so it will run along other functions
  
  loadProducts(()=>{
    
    resolve('value1'); // it controls when to go to the next step, waits to finish loading

  });
}).then((value)=>{
  console.log(value);

  return new Promise((resolve)=>{
    resolve();
  });
  
}).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
})*/

/*loadProducts(()=>{ // multiple callbacks cause a lot of nesting
  renderOrderSummary();
  renderPaymentSummary();
});*/

/*console.log(dayjs().add(5, 'days'));
console.log(dayjs().add(1, 'month'));
console.log(dayjs().subtract(1, 'month'));
console.log(dayjs().format( 'dddd'));
console.log(isWeekend(dayjs().add(5, 'days')));
console.log(isWeekend(dayjs().add(1, 'month')));
console.log(renamedFunction(dayjs().subtract(1, 'month')));*/
