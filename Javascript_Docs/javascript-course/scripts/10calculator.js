let calculation=JSON.parse(localStorage.getItem('result')||'');
      document.querySelector('.js-display-math').innerHTML= calculation;
      function updateCalculation(number){
        if(number ==='Clear'){
          calculation=0;
          document.querySelector('.js-display-math').innerHTML= calculation;
          localStorage.setItem('result', JSON.stringify(calculation));
        }
        else if(number ==='='){
          calculation= eval(calculation);
          document.querySelector('.js-display-math').innerHTML= calculation;
          localStorage.setItem('result', JSON.stringify(calculation));
        }
        else if(!calculation)
        {
         calculation=number;
         document.querySelector('.js-display-math').innerHTML= calculation;
          localStorage.setItem('result', JSON.stringify(calculation));
        }
        else{
          calculation+=number;
          document.querySelector('.js-display-math').innerHTML= calculation;
          localStorage.setItem('result', JSON.stringify(calculation));
          
        }
        
      }