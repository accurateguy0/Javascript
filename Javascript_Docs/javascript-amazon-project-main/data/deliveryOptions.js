export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
},{
   id: '2',
  deliveryDays: 3,
  priceCents: 499
},{
   id: '3',
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId){
  let deliveryOption;
      
      
  deliveryOptions.forEach((option)=>{
    if(option.id === deliveryOptionId){
      deliveryOption=option;
    }
  });
  return deliveryOption || deliveryOptions[0];
}

export function calculateDeliveryDate(deliveryOption){
    const today = dayjs();
    let daysRemaining = deliveryOption.deliveryDays;
    
    let daysForward = 0;
    while (daysRemaining > 0){
      daysForward++;
      if(today.add(daysForward, 'days').format('dddd') !== 'Saturday' && today.add(daysForward, 'days').format('dddd') !== 'Sunday'){
        daysRemaining--;
      }
    }
    const dateString = today.add(daysForward, 'days').format('dddd, MMMM D');
    return dateString;
  }