var contador = 1;
var tabuleiro = ["", "", "", "", "", "", "", "", ""];
let jogoGanho = false;
let turno

/*
    [0 1 2]
    [3 4 5]
    [6 7 8]
*/

const vitoria=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



document.onclick= function(event) {

    if (event === undefined) event = window.event;

    var element = document.getElementById(event.target.id);
    var mensagem = document.getElementById("mensagem")
    if(!jogoGanho){
        if(contador%2 == 0){
            element.innerHTML = "X"
            mensagem.innerHTML = "Turno: O"
            if(tabuleiro[event.target.id - 1] == ""){
                tabuleiro[event.target.id - 1] = "X"
            }
            turno = "X"
        }else{
            element.innerHTML = "O"
            mensagem.innerHTML = "Turno: X"
            if(tabuleiro[event.target.id - 1] == ""){
                tabuleiro[event.target.id - 1] = "O"
            }
            turno = "O"
        }
        contador+= 1;
    }
    checaJogo()
};

function checaJogo(){
    for (let i = 0; i <= 7; i++) {
        const checagem = vitoria[i];
        let a = tabuleiro[checagem[0]];
        let b = tabuleiro[checagem[1]];
        let c = tabuleiro[checagem[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            jogoGanho = true;
            mensagem.innerHTML = `Vitoria de: ${turno}`
            break
        }
    }
}

function reset(){
    console.log(tabuleiro)
    var element = document.getElementById('mensagem')
    element.innerHTML = "Turno:"
    document.querySelectorAll('.square').forEach(square => square.innerHTML = "")
    tabuleiro = ["", "", "", "", "", "", "", "", ""];
    jogoGanho = false;
}