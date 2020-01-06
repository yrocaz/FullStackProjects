// Restart game button
var restart = document.querySelector('#b');

// Grab all squares
var squares = document.querySelectorAll('td');

// Clears the board when restart is pressed
function clearBoard(){
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = ''
        turn = 0;
    }
};

restart.addEventListener("click", clearBoard);

// turn, counter, & score display
var turn = 0;
var xo = document.querySelector('#t');
var xScore = 0;
var oScore = 0;

// Changes tile to X or O
function move(){
    if (turn === 9){
        alert("Stalemate! New game.")
        clearBoard();
    }else if (turn%2 === 0){
        console.log("Click detected. 'turn' is currently: "+turn)
        if (this.textContent === 'O') {
            alert("You can't play there!")
            turn = turn;
            console.log("Operation preformed. 'turn' is now "+turn)
        }else if(this.textContent === 'X') {
            alert("You're already there!")
            turn = turn;
            console.log("Operation preformed. 'turn' is now "+turn)
        }else if(this.textContent === '') {
            this.textContent = 'X'
            xo.textContent = "It's O's turn to play."; // change turn text
            turn++
            console.log("Operation preformed. 'turn' is now "+turn);
        }
    } else {
        console.log("Click detected. 'turn' is currently: "+turn)
        if (this.textContent === 'X') {
            alert("You can't play there!")
            turn = turn;
            console.log("Operation preformed. 'turn' is now "+turn)
        }else if(this.textContent === 'O') {
            alert("You're already there!")
            turn = turn;
            console.log("Operation preformed. 'turn' is now "+turn)
        }else if(this.textContent === '') {
            this.textContent = 'O'
            xo.textContent = "It's X's turn to play."; // change turn text
            turn++
            console.log("Operation preformed. 'turn' is now "+turn)
        }
    } win()
};

// updates board after each move
function board(){
    topRow = [
        document.querySelector("#t1").textContent,
        document.querySelector("#t2").textContent,
        document.querySelector("#t3").textContent]
    midRow = [
        document.querySelector("#m1").textContent,
        document.querySelector("#m2").textContent,
        document.querySelector("#m3").textContent]
    botRow = [
        document.querySelector("#b1").textContent,
        document.querySelector("#b2").textContent,
        document.querySelector("#b3").textContent]
    lCol = [
        document.querySelector("#t1").textContent,
        document.querySelector("#m1").textContent,
        document.querySelector("#b1").textContent]
    mCol = [
        document.querySelector("#m2").textContent,
        document.querySelector("#m2").textContent,
        document.querySelector("#b2").textContent]
    rCol = [
        document.querySelector("#t3").textContent,
        document.querySelector("#m3").textContent,
        document.querySelector("#b3").textContent]
    lrDiag = [
        document.querySelector("#t1").textContent,
        document.querySelector("#m2").textContent,
        document.querySelector("#b3").textContent]
    rlDiag = [
        document.querySelector("#t3").textContent,
        document.querySelector("#m2").textContent,
        document.querySelector("#b1").textContent]
}

// containers for win conditions
var blank = ''
var blankArr = ['','','']
var topRow = ['','','']
var midRow = ['','','']
var botRow = ['','','']
var lCol = ['','','']
var mCol = ['','','']
var rCol = ['','','']
var lrDiag = ['','','']
var rlDiag = ['','','']
var winner = ""

// Win conditions logic
function win(){
    board()
    // top row win
    if(topRow.includes(blank) === false &&
    document.querySelector("#t1").textContent === document.querySelector("#t2").textContent 
    && document.querySelector("#t2").textContent === document.querySelector("#t3").textContent){
        alert(document.querySelector("#t1").textContent+" wins!")
        winner = document.querySelector("#t1").textContent
        score();
    // middle row win
    } else if(midRow.includes(blank) === false &&
    document.querySelector("#m1").textContent === document.querySelector("#m2").textContent 
    && document.querySelector("#m2").textContent === document.querySelector("#m3").textContent){
        alert(document.querySelector("#m1").textContent+" wins!")
        winner = document.querySelector("#m1").textContent
        score();
    // bottom row win
    } else if(botRow.includes(blank) === false &&
    document.querySelector("#b1").textContent === document.querySelector("#b2").textContent 
    && document.querySelector("#b2").textContent === document.querySelector("#b3").textContent){
        alert(document.querySelector("#b1").textContent+" wins!")
        winner = document.querySelector("#b1").textContent
        score();
    // left col win 
    } else if(lCol.includes(blank) === false &&
    document.querySelector("#t1").textContent === document.querySelector("#m1").textContent 
    && document.querySelector("#m1").textContent === document.querySelector("#b1").textContent){
        alert(document.querySelector("#t1").textContent+" wins!")
        winner = document.querySelector("#t1").textContent
        score();
    // middle col win
    } else if(mCol.includes(blank) === false &&
    document.querySelector("#t2").textContent === document.querySelector("#m2").textContent 
    && document.querySelector("#m2").textContent === document.querySelector("#b2").textContent){
        alert(document.querySelector("#t2").textContent+" wins!")
        winner = document.querySelector("#t2").textContent
        score();
    // right col win
    } else if(rCol.includes(blank) === false &&
    document.querySelector("#t3").textContent === document.querySelector("#m3").textContent 
    && document.querySelector("#m3").textContent === document.querySelector("#b3").textContent){
        alert(document.querySelector("#t3").textContent+" wins!")
        winner = document.querySelector("#t3").textContent
        score();
    // diagonal LR win
    } else if(lrDiag.includes(blank) === false &&
    document.querySelector("#t1").textContent === document.querySelector("#m2").textContent 
    && document.querySelector("#m2").textContent === document.querySelector("#b3").textContent){
        alert(document.querySelector("#t1").textContent+" wins!")
        winner = document.querySelector("#t1").textContent
        score();
    // diagonal RL win
    } else if(rlDiag.includes(blank) === false &&
    document.querySelector("#t3").textContent === document.querySelector("#m2").textContent 
    && document.querySelector("#m2").textContent === document.querySelector("#b1").textContent){
        alert(document.querySelector("#t3").textContent+" wins!")
        winner = document.querySelector("#t3").textContent
        score();
    }
}

// Score logic
function score(){
    clearBoard()
    if (winner === "X"){
        xScore++
        xo.textContent = "Snice X won it's X's turn to play."
    } else {
        turn++
        oScore++
        xo.textContent = "Since O won it's O's turn to play."
    }
    document.querySelector('#x').textContent = xScore
    document.querySelector('#o').textContent = oScore
    if (xScore == 3){
        alert("X wins it all! That's game!")
        reset();
    } else if(oScore === 3){
        alert("O wins it all! That's game!")
        reset();
    }
}

// Resets everything after best of 5
function reset(){
    xScore = 0
    oScore = 0
    document.querySelector('#x').textContent = xScore
    document.querySelector('#o').textContent = oScore
}
// add Event Listeners to all the squares
for (var i= 0; i < squares.length; i++) {
    squares[i].addEventListener('click', move);
};

console.log("We're in... Let the games begin!")
