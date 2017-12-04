var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];

function createGame(){
  for (var i = 0; i < 9; i++) {
    var square = document.createElement('div');
    square.id = i;
    if (i === 0 || i === 1 || i === 3|| i === 4) {
      square.setAttribute('class', 'square b-border r-border')
    } else if (i === 2 || i === 5) {
      square.setAttribute('class', 'square b-border')
    } else if (i === 6 || i === 7) {
      square.setAttribute('class', 'square r-border')
    } else if (i < 8) {
      square.setAttribute('class', 'square r-border')
    }
    document.getElementById('gameboard').appendChild(square);
    addClickListener(square)
    }
  }

function displayMessage(message){
  var messageEl = document.getElementsByClassName('message')[0];
  console.log(messageEl)
  if (message) {
    messageEl.innerHTML = message;
  } else {
    messageEl.innerHTML = 'current player ' + currentPlayer
  }
}
function changeMessage(){
  mes = document.getElementsByClassName('message')[0];
  mes.setAttribute('class', 'end-message');
}
function makeMove(square, index){
  board[index] = currentPlayer;
  square.innerHTML = currentPlayer;
}
createGame();
