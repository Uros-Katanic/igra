const options = document.querySelectorAll('#options img');
const resultText = document.querySelector('#result-text');
const resultImage = document.querySelector('#result-image');

let playerChoice;
let computerChoice;

options.forEach(option => option.addEventListener('click', play));

function play() {
  playerChoice = this.id;
  computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showResult(winner);
}

function getComputerChoice() {
  const choices = ['paper', 'rock', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getWinner(player, computer) {
  if (player === computer) {
    return 'draw';
  } else if (player === 'paper' && computer === 'rock' || player === 'rock' && computer === 'scissors' || player === 'scissors' && computer === 'paper') {
    return 'player';
  } else {
    return 'computer';
  }
}

function showResult(winner) {
  if (winner === 'player') {
    resultText.textContent = 'Pobeda!';
    resultImage.setAttribute('src', '/pobeda.png');
  } else if (winner === 'computer') {
    resultText.textContent = 'Izgubili ste.';
    resultImage.setAttribute('src', '/gubitak.png');
  } else {
    resultText.textContent = 'Nerešeno!';
    resultImage.setAttribute('src','/nereseno.png' );
  }
}
