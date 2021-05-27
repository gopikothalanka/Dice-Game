'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player = document.getElementsByClassName('player');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

function changePlayer(){
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  // if(activePlayer==0){
  //   activePlayer=1;
  // }else{
  //   activePlayer=0;
    
  // }
}
diceEl.classList.add('hidden');
let activePlayer=0;
let currentScore=0;
//roll dice
btnRoll.addEventListener('click',()=>{
   const dice=Math.trunc(Math.random()*6+1);
  console.log(dice);
  //display dice
  diceEl.classList.remove('hidden');
  diceEl.src =`dice-${dice}.png`;
  //add score to currentScore
  if(dice!==1){
  // currentScore= currentScore+dice;
  currentScore+=dice;
  document.getElementById(`current--${activePlayer}`).innerText=currentScore;
  }else{
    currentScore=0;
    document.getElementById(`current--${activePlayer}`).innerText=currentScore;
    changePlayer();
  }
});

btnHold.addEventListener('click',()=>{
  //hold button actions
  console.log(`hold${activePlayer}`);
  document.getElementById(`score--${activePlayer}`).innerText=currentScore;
  currentScore=0;
  document.getElementById(`current--${activePlayer}`).innerText=currentScore;
  //change player
  changePlayer();
});

btnNew.addEventListener('click',()=>{
  currentScore=0;
  activePlayer=0;
  document.getElementById('score--0').innerText=0;
  document.getElementById('score--1').innerText=0;
  document.getElementById('current--1').innerText=0;
  document.getElementById('current--0').innerText=0;


  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
})


