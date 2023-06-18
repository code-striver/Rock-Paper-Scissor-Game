let r = document.getElementById('rock')
let p = document.getElementById('paper')
let s = document.getElementById('sci')
let losText = document.getElementById('har')
let winText = document.getElementById('jit')
let drawText = document.getElementById('draw')
let chanceText = document.getElementById('bari')
let compChoice = document.getElementById('comp')
let userChoice = document.getElementById('user')
let endResult = document.getElementById('er')
let userKaInput = ""
let computerKaInput = ""
let i = 0;
let win = 0;
let loss = 0;
let draw = 0;
let randomNumber = 0;




    function gameResult(ui, ci){
        compChoice.innerHTML = ci;
        userChoice.innerHTML = ui;
        if (ui == ci){
            draw = draw + 1
            drawText.innerHTML = draw
            chances = chances - 1;
            chanceText.innerHTML = chances;
            if(chances == 0){
                if(win > loss){
                    er.innerHTML = "YOU WON"
                }
                else if (win < loss){
                    er.innerHTML = "YOU LOSE"
                }
                else if(win == loss){
                    er.innerHTML = "ITS A DRAW"
                }
                setTimeout(function() {
                    location.reload();
                  }, 3000);
            }
            if (chances < 0){
                location.reload();
            }
            return;
        }
        else if(ui == "rock" && ci == "paper"){
            loss = loss + 1
            losText.innerHTML = loss;
            chances = chances - 1;
            chanceText.innerHTML = chances;
            if(chances == 0){
                if(win > loss){
                    er.innerHTML = "YOU WON"
                }
                else if (win < loss){
                    er.innerHTML = "YOU LOSE"
                }
                else if(win == loss){
                    er.innerHTML = "ITS A DRAW"
                }
                setTimeout(function() {
                    location.reload();
                  }, 3000);
            }
            if (chances < 0){
                location.reload();
            }
            return;
        }
        else if (ui == "rock" && ci == "scissor"){
            win = win + 1;
            winText.innerHTML = win;
            chances = chances - 1;
            chanceText.innerHTML = chances;
            if(chances == 0){
                if(win > loss){
                    er.innerHTML = "YOU WON"
                }
                else if (win < loss){
                    er.innerHTML = "YOU LOSE"
                }
                else if(win == loss){
                    er.innerHTML = "ITS A DRAW"
                }
                setTimeout(function() {
                    location.reload();
                  }, 3000);
            }
            if (chances < 0){
                location.reload();
            }
            return;
        }
        else if(ui == "scissor" && ci == "rock"){
            loss = loss + 1
            losText.innerHTML = loss;
            chances = chances - 1;
            chanceText.innerHTML = chances;
            if(chances == 0){
                if(win > loss){
                    er.innerHTML = "YOU WON"
                }
                else if (win < loss){
                    er.innerHTML = "YOU LOSE"
                }
                else if(win == loss){
                    er.innerHTML = "ITS A DRAW"
                }
                setTimeout(function() {
                    location.reload();
                  }, 3000);
            }
            if (chances < 0){
                location.reload();
            }
            return;
        }
        else if (ui == "scissor" && ci == "paper"){
            win = win + 1;
            winText.innerHTML = win;
            chances = chances - 1;
            chanceText.innerHTML = chances;
            if(chances == 0){
                if(win > loss){
                    er.innerHTML = "YOU WON"
                }
                else if (win < loss){
                    er.innerHTML = "YOU LOSE"
                }
                else if(win == loss){
                    er.innerHTML = "ITS A DRAW"
                }
                setTimeout(function() {
                    location.reload();
                  }, 3000);
            }
            if (chances < 0){
                location.reload();
            }
            return;
        }
        else if(ui == "paper" && ci == "scissor"){
            loss = loss + 1
            losText.innerHTML = loss;
            chances = chances - 1;
            chanceText.innerHTML = chances;
            if(chances == 0){
                if(win > loss){
                    er.innerHTML = "YOU WON"
                }
                else if (win < loss){
                    er.innerHTML = "YOU LOSE"
                }
                else if(win == loss){
                    er.innerHTML = "ITS A DRAW"
                }
                setTimeout(function() {
                    location.reload();
                  }, 3000);
            }
            if (chances < 0){
                location.reload();
            }
            return;
        }
        else if (ui == "paper" && ci == "rock"){
            win = win + 1;
            winText.innerHTML = win;
            chances = chances - 1;
            chanceText.innerHTML = chances;
            if(chances <= 0){
                if(win > loss){
                    er.innerHTML = "YOU WON"
                }
                else if (win < loss){
                    er.innerHTML = "YOU LOSE"
                }
                else if(win == loss){
                    er.innerHTML = "ITS A DRAW"
                }
            }
            if (chances < 0){
                location.reload();
            }
            return;
        }
    }

    function game(n){
    r.addEventListener('click', function(){
        userKaInput = "rock"
    randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber == 1){
        computerKaInput = "rock"
    }
    else if(randomNumber == 2){
        computerKaInput = "paper"
    }
    else{
        computerKaInput = "scissor"
    }
        gameResult(userKaInput, computerKaInput);
        return;
    })
    p.addEventListener('click', function(){
        userKaInput = "paper"
        randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber == 1){
        computerKaInput = "rock"
    }
    else if(randomNumber == 2){
        computerKaInput = "paper"
    }
    else{
        computerKaInput = "scissor"
    }
        gameResult(userKaInput, computerKaInput);
        return;
    })
    s.addEventListener('click', function(){
        userKaInput = "scissor"
        randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber == 1){
        computerKaInput = "rock"
    }
    else if(randomNumber == 2){
        computerKaInput = "paper"
    }
    else{
        computerKaInput = "scissor"
    }
        gameResult(userKaInput, computerKaInput);
        return;
    })

    }

let n = prompt("Enter number of times you want to play")
n = parseInt(n)
let chances = n;
chanceText.innerHTML = chances
game(n);
