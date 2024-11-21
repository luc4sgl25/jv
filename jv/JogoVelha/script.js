const dt = new Date().toLocaleString();
let jogadas = 0;

document.getElementById("data").innerHTML = dt;

function FuncaoAviso() {
    alert('Este é apenas um painel de avisos!');
}

let tabuleiro = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
let gameOver = false;

function jogar(bot) {
    if (jogadas < 9 && !gameOver) {
        if (tabuleiro[bot] === "0") {
            document.getElementById(bot).innerHTML = "X";
            tabuleiro[bot] = "X";
            jogadas++;

            if (VerificaVitoria("X")) {
                document.getElementById("data").innerHTML = "Você Ganhou!!";
                gameOver = true;
                return;
            }
            
            RoboJoga();
        } else {
            alert("Escolha outra posição!");
        }
    } 

    if (jogadas === 9 && !gameOver) {
        document.getElementById("data").innerHTML = "O jogo Empatou!";
        alert("O jogo empatou!");
    }
}

function VerificaVitoria(jogador) {
    return (
        (tabuleiro[1] === jogador && tabuleiro[2] === jogador && tabuleiro[3] === jogador) ||
        (tabuleiro[4] === jogador && tabuleiro[5] === jogador && tabuleiro[6] === jogador) ||
        (tabuleiro[7] === jogador && tabuleiro[8] === jogador && tabuleiro[9] === jogador) ||
        (tabuleiro[1] === jogador && tabuleiro[4] === jogador && tabuleiro[7] === jogador) ||
        (tabuleiro[2] === jogador && tabuleiro[5] === jogador && tabuleiro[8] === jogador) ||
        (tabuleiro[3] === jogador && tabuleiro[6] === jogador && tabuleiro[9] === jogador) ||
        (tabuleiro[1] === jogador && tabuleiro[5] === jogador && tabuleiro[9] === jogador) ||
        (tabuleiro[3] === jogador && tabuleiro[5] === jogador && tabuleiro[7] === jogador)
    );
}

function RoboJoga() {
    if (gameOver) return;

   
    let posicoesDisponiveis = [];
    for (let i = 1; i <= 9; i++) {
        if (tabuleiro[i] === "0") {
            posicoesDisponiveis.push(i);
        }
    }


    let jogadaRobô;
    if (Math.random() < 0.5) {
       
        jogadaRobô = posicoesDisponiveis[Math.floor(Math.random() * posicoesDisponiveis.length)];
    } else {
      
        for (let i = 0; i < posicoesDisponiveis.length; i++) {
            let testePos = posicoesDisponiveis[i];
            tabuleiro[testePos] = "O"; 

            if (VerificaVitoria("O")) {
                jogadaRobô = testePos; 
                break;
            }

            tabuleiro[testePos] = "0"; 
        }

        if (!jogadaRobô) {
            
            for (let i = 0; i < posicoesDisponiveis.length; i++) {
                let testePos = posicoesDisponiveis[i];
                tabuleiro[testePos] = "X"; 

                if (VerificaVitoria("X")) {
                    jogadaRobô = testePos; 
                    break;
                }

                tabuleiro[testePos] = "0";
            }
        }
        
       
        if (!jogadaRobô) {
            jogadaRobô = posicoesDisponiveis[Math.floor(Math.random() * posicoesDisponiveis.length)];
        }
    }


    document.getElementById(jogadaRobô).innerHTML = "O";
    tabuleiro[jogadaRobô] = "O";
    jogadas++;

    if (VerificaVitoria("O")) {
        document.getElementById("data").innerHTML = "Você Perdeu!!";
        gameOver = true;
    }
}
