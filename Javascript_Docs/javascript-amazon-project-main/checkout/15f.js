export  default function isWeekend(date){
  if(date.format( 'dddd')==='Saturday'){
    return 'Saturday';
  }
  else if(date.format( 'dddd')==='Sunday'){
    return 'Sunday';
  }
}