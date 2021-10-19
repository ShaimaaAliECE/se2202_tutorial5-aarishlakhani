let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var initializeGame = document.createElement('button');
initializeGame.innerText = 'Click here to start'
document.getElementById('game-over-lbl').appendChild(initializeGame);
initializeGame.addEventListener('click',(initialEvent) => {initialEvent.target.hidden = true;});

// use the value stored in the nextPlayer variable to indicate who the next player is
let nextPlayer = document.querySelector('b');
let playerText = 'Next Player: ';
playerValue.innerText = playerText;


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   for(let i = 0; i<9; i++){
       let cellG = 'c' + (i+1);
       var newGame = document.createElement('button');
       document.getElementById(cellG).appendChild(newGame);
   }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   event.target.innerText = nextPlayer;
   if(nextPlayer == 'X'){
       nextPlayer = 'O';
   }
   else{
       if(nextPlayer === 'O'){
           nextPlayer = 'X';
       }
   }

   let playerText = 'Next Player: ' + nextPlayer;
   playerValue.innerText = playerText;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    event.target.disabled = 'disabled';

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let lbl = document.getElementById('game-over-lbl')
        var newHeader = document.createElement('h1');
        newHeader.innerText = 'Game Over';
        lbl.appendChild(newHeader);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let clickBUTTONS = true;
    for(let i = 0; i<buttons.length; i++){
        if(ibuttons[i].disabled)
        {
            clickBUTTONS = false;
        }
    }
   return clickBUTTONS;
}
