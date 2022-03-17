possibilidade = ['pedra', 'papel', 'tesoura']

function handle(play){
    random = Math.floor(Math.random()*3)

    var player = `${possibilidade[play]}`
    var computer = `${possibilidade[random]}`

    var container = document.getElementById("container")
    var escolha = document.getElementById("escolha")
    var reset = document.getElementById("reset")
    var mensagem = document.getElementById("mensagem")

    container.innerHTML =
        `<p>PLAYER</p>
        <div class="player" id="player">${player}</div>

        <p>COMPUTADOR</p>
        <div class="player" id="computer">${computer}</div>`

    escolha.innerHTML = ""

    reset.innerHTML = 
        `
        <button class="reset" onclick="reset()">reset</button>
        `

    if(player==computer){
        mensagem.innerHTML = "<h2> EMPATE </h2>"
    }else if(player=="papel" && computer=="pedra"){
        mensagem.innerHTML = "<h2> PLAYER GANHOU </h2>"
    }else if(player=="tesoura" && computer=="papel"){
        mensagem.innerHTML = "<h2> PLAYER GANHOU </h2>"
    }else if(player=="pedra" && computer=="tesoura"){
        mensagem.innerHTML = "<h2> PLAYER GANHOU </h2>"
    }else if(computer=="papel" && player=="pedra"){
        mensagem.innerHTML = "<h2> COMPUTADOR GANHOU </h2>"
    }else if(computer=="tesoura" && player=="papel"){
        mensagem.innerHTML = "<h2> COMPUTADOR GANHOU </h2>"
    }else if(computer=="pedra" && player=="tesoura"){
        mensagem.innerHTML = "<h2> COMPUTADOR GANHOU </h2>"
    }
}

function reset(){
    var container = document.getElementById("container")
    container.innerHTML = ""

    var escolha = document.getElementById("escolha")
    escolha.innerHTML = `
        <button class="jogada" onclick="handle(0)">Rock</button>    
        <button class="jogada" onclick="handle(1)">Paper</button>
        <button class="jogada" onclick="handle(2)">Scissor</button>
    `

    var reset = document.getElementById("reset")
    reset.innerHTML = ""

    var mensagem = document.getElementById("mensagem")
    mensagem.innerHTML = ""
}
