function resetGame() {
    firstPlayerScore = 0;
    secondPlayerScore = 0;
    lettersValidator = 1;
    boardValidator = 0;
    clickValidator = 0;
    computerTurnvar = 0;
    playersArray = [];
    gameArray = Array(9).fill("");
    win = 0;
    gridItemOption.forEach(gridItem => {
        gridItem.innerHTML = "";
    })
    lettersOption.forEach(letterx => {
        letterx.classList.remove("button-clicked")
    });
    scorePlayer1.textContent = firstPlayerScore;
    scorePlayer2.textContent = secondPlayerScore;
}

function letterSelector(letter) {
    boardValidator = 1;
    boardValidation();
    if (lettersValidator == 0) return
    lettersValidator = 0;
    if (letter.innerText == "X") {
        letter.classList.add("button-clicked");
        playersArray[0] = "X"
        playersArray[1] = 'O';
        clickValidator = 1;
    } else {
        letter.classList.add("button-clicked");
        playersArray[0] = 'O';
        playersArray[1] = 'X';
        computerTurnvar = 1;
        computerTurn();
    }
}

function boardValidation() {
    if (boardValidator == 0) return;
    gridItemOption.forEach(item => {
        item.classList.add("board-validation");
    });
}


function userClickItem(item) {
    if (clickValidator == 0 || item.innerHTML != "") return
    item.innerHTML = "<span>" + playersArray[0] + "</span>";
    item.classList.add("square-chose");
    gameArrayUpdate(item);
    clickValidator = 0;
    computerTurnvar = 1;
    checkResult();
    computerTurn();

}

function gameArrayUpdate(item) {
    var suareId;
    squareId = item.id.split("-")[1];
    gameArray[squareId] = item.textContent;
    console.log(gameArray);

}


function computerTurn() {
    var randomn = 0;
    if (computerTurnvar == 0 || win == 1) return
    computerCheckArray = [
        [gameArray[0], gameArray[1], gameArray[2]],
        [gameArray[3], gameArray[4], gameArray[5]],
        [gameArray[6], gameArray[7], gameArray[8]],
        [gameArray[0], gameArray[3], gameArray[6]],
        [gameArray[1], gameArray[4], gameArray[7]],
        [gameArray[2], gameArray[5], gameArray[8]],
        [gameArray[0], gameArray[4], gameArray[8]],
        [gameArray[2], gameArray[4], gameArray[6]]
    ];
    winChanceCkecker();
    // randomChoice(randomn);
    clickValidator = 1;
    computerTurnvar = 0;
}

function winChanceCkecker() {
    var check = false;
    for (let j = 0; j < 8; j++) {
        var numOfX = 0;
        var numOfO = 0
        if (check == true) {
            break;
        }
        for (var i = 0; i <= 3; i++) {

            if (computerCheckArray[j][i] == "O") {
                numOfO++;
            } else if (computerCheckArray[j][i] == "X") {
                numOfX++;
            }
        }

        if (numOfO == 2 || numOfX == 2) {
            for (let i = 0; i <= 2; i++) {
                if (computerCheckArray[j][i] == "") {
                    computerCheckArray[j][i] = playersArray[1];
                    delayFun(j, i);

                    function delayFun(j, i) {
                        setTimeout(() => {

                            document.querySelectorAll(".win-" + j + i)[0].innerHTML = "<span>" + playersArray[1] + "</span>";
                            document.querySelectorAll(".win-" + j + i)[0].classList.add("square-chose");
                            gameArrayUpdate((document.querySelectorAll(".win-" + j + i)[0]));
                            checkResult();
                        }, 700);
                    }


                    // var w= ".win-" + j +i;
                    // console.log(w);
                    // console.log(document.querySelectorAll(".win-" + j + i)[0]));
                    // gameArrayUpdate( document.querySelectorAll("w")[0]);
                    check = true;
                }

            }

        }

    }

    randomChoice(check);

}


function randomChoice(check) {
    if (check == false) {
        console.log(gameArray);
        var randomNum = Math.floor(Math.random() * 10);
        console.log(randomNum);

        if (gameArray[randomNum] != "") {
            randomChoice(check);
        } else {
            gameArray[randomNum] = playersArray[1];
            setTimeout(() => {
                gridItemOption[randomNum].innerHTML = "<span>" + playersArray[1] + "</span>";
                gridItemOption[randomNum].classList.add("square-chose");
                checkResult();
            }, 900);
            check = true;

        }
        // }

    }


}




function checkResult() {
    var case_1 = playersArray[0];
    var case_2 = playersArray[1];
    console.log(gameArray);
    if (gameArray[0] == case_1 && gameArray[1] == case_1 && gameArray[2] == case_1) {
        firstPlayerScore++;
        win = 1;
        scorePlayer1.textContent = firstPlayerScore;
        for (let i = 0; i <= 2; i++) {
            gridItemOption[i].classList.add("win");
            setTimeout(() => {
                clearBoard();
                gridItemOption[i].classList.remove("win");
            }, 1200);
        }

    }


    if (gameArray[0] == case_2 && gameArray[1] == case_2 && gameArray[2] == case_2) {
        win = 1;
        secondPlayerScore++;
        scorePlayer2.textContent = secondPlayerScore;
        for (let i = 0; i <= 2; i++) {
            gridItemOption[i].classList.add("win");
            setTimeout(() => {
                clearBoard();
                gridItemOption[i].classList.remove("win");
            }, 1200);
        }

    }


    if (gameArray[3] == case_1 && gameArray[4] == case_1 && gameArray[5] == case_1) {
        win = 1;
        firstPlayerScore++;
        scorePlayer1.textContent = firstPlayerScore;
        for (let i = 3; i <= 5; i++) {
            gridItemOption[i].classList.add("win");
            setTimeout(() => {
                clearBoard();
                gridItemOption[i].classList.remove("win");
            }, 1200);
        }

    }


    if (gameArray[3] == case_2 && gameArray[4] == case_2 && gameArray[5] == case_2) {
        win = 1;
        secondPlayerScore++;
        scorePlayer2.textContent = secondPlayerScore;
        for (let i = 3; i <= 5; i++) {
            gridItemOption[i].classList.add("win");
            setTimeout(() => {
                clearBoard();
                gridItemOption[i].classList.remove("win");
            }, 1200);
        }

    }

    if (gameArray[6] == case_1 && gameArray[7] == case_1 && gameArray[8] == case_1) {
        win = 1;
        firstPlayerScore++;
        scorePlayer1.textContent = firstPlayerScore;
        for (let i = 6; i <= 8; i++) {
            gridItemOption[i].classList.add("win");
            setTimeout(() => {
                clearBoard();
                gridItemOption[i].classList.remove("win");
            }, 1200);
        }
    }


    if (gameArray[6] == case_2 && gameArray[7] == case_2 && gameArray[8] == case_2) {
        win = 1;
        secondPlayerScore++;
        scorePlayer2.textContent = secondPlayerScore;
        for (let i = 6; i <= 8; i++) {
            gridItemOption[i].classList.add("win");
            setTimeout(() => {
                clearBoard();
                gridItemOption[i].classList.remove("win");
            }, 1200);
        }
    }


    if (gameArray[0] == case_1 && gameArray[3] == case_1 && gameArray[6] == case_1) {
        win = 1;
        firstPlayerScore++;
        scorePlayer1.textContent = firstPlayerScore;
        for (let i = 0; i <= 6; i = i + 3) {
            gridItemOption[i].classList.add("win");
            setTimeout(() => {
                clearBoard();
                gridItemOption[i].classList.remove("win");
            }, 1200);
        }

    }


    if (gameArray[0] == case_2 && gameArray[3] == case_2 && gameArray[6] == case_2) {
        win = 1;
        secondPlayerScore++;
        scorePlayer2.textContent = secondPlayerScore;
        for (let i = 0; i <= 6; i = i + 3) {
            gridItemOption[i].classList.add("win");
            setTimeout(() => {
                clearBoard();
                gridItemOption[i].classList.remove("win");
            }, 1200);
        }

    }


    if (gameArray[1] == case_1 && gameArray[4] == case_1 && gameArray[7] == case_1) {
        win = 1;
        firstPlayerScore++;
        scorePlayer1.textContent = firstPlayerScore;
        for (let i = 1; i <= 7; i = i + 3) {
            gridItemOption[i].classList.add("win");
            setTimeout(() => {
                clearBoard();
                gridItemOption[i].classList.remove("win");
            }, 1200);
        }

    }


    if (gameArray[1] == case_2 && gameArray[4] == case_2 && gameArray[7] == case_2) {
        win = 1;
        secondPlayerScore++;
        scorePlayer2.textContent = secondPlayerScore;
        for (let i = 1; i <= 7; i = i + 3) {
            gridItemOption[i].classList.add("win");
            setTimeout(() => {
                clearBoard();
                gridItemOption[i].classList.remove("win");
            }, 1200);
        }

    }


    if (gameArray[2] == case_1 && gameArray[5] == case_1 && gameArray[8] == case_1) {
        win = 1;
        firstPlayerScore++;
        scorePlayer1.textContent = firstPlayerScore;
        for (let i = 2; i <= 8; i = i + 3) {
            gridItemOption[i].classList.add("win");
            setTimeout(() => {
                clearBoard();
                gridItemOption[i].classList.remove("win");
            }, 1200);
        }

    }


    if (gameArray[2] == case_2 && gameArray[5] == case_2 && gameArray[8] == case_2) {
        win = 1;
        secondPlayerScore++;
        scorePlayer2.textContent = secondPlayerScore;
        for (let i = 2; i <= 8; i = i + 3) {
            gridItemOption[i].classList.add("win");
            setTimeout(() => {
                clearBoard();
                gridItemOption[i].classList.remove("win");
            }, 1200);
        }

    }
    if (gameArray[0] == case_1 && gameArray[4] == case_1 && gameArray[8] == case_1) {
        win = 1;
        firstPlayerScore++;
        scorePlayer1.textContent = firstPlayerScore;
        for (let i = 0; i <= 8; i = i + 4) {
            gridItemOption[i].classList.add("win");
            setTimeout(() => {
                clearBoard();
                gridItemOption[i].classList.remove("win");
            }, 1200);
        }

    }


    if (gameArray[0] == case_2 && gameArray[4] == case_2 && gameArray[8] == case_2) {
        win = 1;
        secondPlayerScore++;
        scorePlayer2.textContent = secondPlayerScore;
        for (let i = 0; i <= 8; i = i + 4) {
            gridItemOption[i].classList.add("win");
            setTimeout(() => {
                clearBoard();
                gridItemOption[i].classList.remove("win");
            }, 1200);
        }

    }



    if (gameArray[2] == case_1 && gameArray[4] == case_1 && gameArray[6] == case_1) {
        win = 1;
        firstPlayerScore++;
        scorePlayer1.textContent = firstPlayerScore;
        for (let i = 2; i <= 6; i = i + 2) {
            gridItemOption[i].classList.add("win");
            setTimeout(() => {
                clearBoard();
                gridItemOption[i].classList.remove("win");
            }, 1200);
        }
    }


    if (gameArray[2] == case_2 && gameArray[4] == case_2 && gameArray[6] == case_2) {
        win = 1;
        secondPlayerScore++;
        scorePlayer2.textContent = secondPlayerScore;
        for (let i = 2; i <= 6; i = i + 2) {
            gridItemOption[i].classList.add("win");
            setTimeout(() => {
                clearBoard();
                gridItemOption[i].classList.remove("win");
            }, 1200);
        }
    }

    if (!(gameArray.includes(""))) {
        clearBoard();
    }
}




function clearBoard() {
    gridItemOption.forEach(gridItem => {
        gridItem.textContent = "";
    })
    gameArray = Array(9).fill("");
    win = 0;
    lettersValidator = 1
    lettersOption.forEach(letterx => {
        letterx.classList.remove("button-clicked")
    });
    playersArray = [];
    clickValidator = 0;
    computerTurnvar = 0;
}

const lettersOption = document.querySelectorAll(".letter");
const gridItemOption = document.querySelectorAll(".grid-item");
const restart = document.querySelector(".reset");
var scorePlayer1 = document.querySelector(".player1");
var scorePlayer2 = document.querySelector(".player2");
const player1 = "X";
const player2 = "O";
var firstPlayerScore = 0;
var secondPlayerScore = 0;
var lettersValidator = 1;
var boardValidator = 0;
var clickValidator = 0;
computerTurnvar = 0;
var playersArray = [];
var gameArray = new Array(9).fill("");
var computerCheckArray;
var win = 0;

lettersOption.forEach(letter => {
    letter.addEventListener('click', () => {
        letterSelector(letter);
    })
})


gridItemOption.forEach(item => {
    item.addEventListener('click', () => {
        userClickItem(item, playersArray);
    })
})


restart.addEventListener('click', () => {
    resetGame();
})