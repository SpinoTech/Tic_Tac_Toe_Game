console.log(`welcome to Tic Tac Toe`);
let bgmusic = new Audio("game_background.mp3");
let tapmusic = new Audio("tapSound.wav");
let gameovermusic = new Audio("gameover.wav");
let turnsound = new Audio("turn.mp3");
let x_win = new Audio("x_win.mp3");
let o_win = new Audio("0_win.mp3");
let turn = "X";
let gameover = false;

// function to change the turn
const changeTurn = () => {

    return turn === "X" ? "0" : "X";
}

// function to check win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');//getting the value of each box 
    // all posibility of wining the game

    // "L" tic tac toe possibility part
    let wins = [
       [0,1,4],
       [1,4,3],
       [4,3,0],
       [3,0,1],
       [1,2,5],
       [2,5,4],
       [5,4,1],
       [4,1,2],
       [3,4,7],
       [4,7,6],
       [7,6,3],
       [6,3,4],
       [4,5,8],
       [5,8,7],
       [8,7,4],
       [7,4,5]
    ]

    // now check for each touple of wins array is empty or not and check each row of the wins array is smae 

    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")) {

            // making all pairs of red colored after wining

            boxtexts[e[0]].style.color="red";
            boxtexts[e[1]].style.color="red";
            boxtexts[e[2]].style.color="red";

            // if the condition satisfied then print the boxtexts[e[0]].innerText element as winner and it will reflect to the '.info ' classed parent.
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " is the winner";
            if (boxtexts[e[0]].innerText === 'X') {
                x_win.play();
            }
            else {
                o_win.play();
            }
            gameover = true;
            
            // // visibling the wining imogi
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="350px";
        }
    })
}

// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            tapmusic.play();
            checkWin();
            if (!gameover) {
                bgmusic.volume=0.1;
                bgmusic.play();//background music is on while playing. 
                document.getElementsByClassName("info")[0].innerText = "Turn for : " + turn;
            }
            else{
                gameovermusic.volume=0.2;//reducing the sound to 0.2.
                gameovermusic.play();
                bgmusic.pause();//pause the background music when the game is over.
            }
        }
    })
})

// add onclick lister to reset button

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText = ""
    });
    turn="X";
    gameover=false;//for repeating the whole process after ckicking the button
        document.getElementsByClassName("info")[0].innerText = "Turn for : " + turn;
    
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";

        // making all color back in black after clicking the reset button

        let boxtext = document.getElementsByClassName('boxtext');//getting the value of each box 
        // all posibility of wining the game
    
        // "L" tic tac toe possibility part
        let wins = [
           [0,1,4],
           [1,4,3],
           [4,3,0],
           [3,0,1],
           [1,2,5],
           [2,5,4],
           [5,4,1],
           [4,1,2],
           [3,4,7],
           [4,7,6],
           [7,6,3],
           [6,3,4],
           [4,5,8],
           [5,8,7],
           [8,7,4],
           [7,4,5]
        ]

        wins.forEach(e=>{
            boxtext[e[0]].style.color="black";
            boxtext[e[1]].style.color="black";
            boxtext[e[2]].style.color="black"
        })
}
)
