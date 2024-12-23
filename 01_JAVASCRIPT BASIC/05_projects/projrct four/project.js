let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let preGuess = []
let numGuess = 1
let playGame = true

if(playGame){
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number')
  } else if(guess < 1){
    alert('please enter number more than 1')
  } else if(guess > 100){
    alert('please enter number smaller than 100')
  }else{
    preGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`game over. random number ${randomNumber}`)
      endGame()
    }else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`you guess is right`)
  } else if (guess < randomNumber){
    displayMessage(`guess s too low`)
  }else if (guess > randomNumber){
    displayMessage(`guess s too high`)
}
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${ 11 - numGuess }`;
}


function displayMessage(message){
  lowHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame>Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', (e)=>{
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true

  })
}