import {formatCurrency} from '../utils/money.js';

if(formatCurrency(2095)=== '20.95'){
  console.log('passsed');
}else{
  console.log('not passsed');
} // basic and edge cases
// group of related tests are called test suite
// Jasmine, MochaJS library