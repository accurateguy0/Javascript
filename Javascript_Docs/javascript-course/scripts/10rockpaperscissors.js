let score =JSON.parse(localStorage.getItem('score'))||{
        wins : 0,
        loses :0,
        ties: 0,
      } // get item out of local storage
      updateScoreElement();

      
      //if(!score)
      function playGame(playerMove){
        const computerMove = pickComputerMove();
        let result = '';
        if(playerMove === 'scissors')
        {
          if(computerMove === 'rock'){
            result='You lose.';
          }
          else if(computerMove === 'paper'){
              result='You win.';
          }
          else if(computerMove === 'scissors'){
              result='Tie.';
          }
        }
        else if(playerMove === 'paper'){
          if(computerMove === 'rock'){
          result='You win.';
          }
          else if(computerMove === 'paper'){
              result='Tie.';
          }
          else if(computerMove === 'scissors'){
              result='You lose.';
          }

        } else if(playerMove === 'rock'){
          if(computerMove === 'rock'){
          result='Tie.';
          }
          else if(computerMove === 'paper'){
              result='You lose.';
          }
          else if(computerMove === 'scissors'){
              result='You win.';
          }
        }
        if(result ==='You win.'){
          score.wins += 1;
        }
        else if(result ==='You lose.'){
          score.loses += 1;
        }
        else if(result ==='Tie.'){
          score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score)); // save inside local storage, only supports strings

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-sign.png" class="move-icon"> - <img src="images/${computerMove}-sign.png" class="move-icon"> Computer`;
      }
      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
      }
      function pickComputerMove(){
        const rndNum =Math.random();
        let computerMove ='';
        if(rndNum >= 0 && rndNum <= 1/3){
          computerMove = 'rock'}
        else if(rndNum > 1/3 && rndNum <= 2/3){
          computerMove = 'paper'}
        else if(rndNum > 2/3 && rndNum <= 1){
          computerMove = 'scissors'
        }
        return computerMove;
      }