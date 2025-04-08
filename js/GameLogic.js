document.getElementById("empezar").addEventListener("click",function(){
    empezarRonda()
    roundStart()
})



var turn = ""
var juegoiniciado = false
var tablero = [
    ["","",""],
    ["","",""],
    ["","",""]
]
var elementoclickeado = 0
var elementosClickeados = []
var origincolors = {}
var puntuacionX = 0
var puntuacionO = 0

function roundStart(){
    turn = "❌"
    document.getElementById("turno").innerHTML = `Turno : ${turn}`

}



function empezarRonda(){
    let titulo = document.getElementById("header");
    let turno = document.createElement("h1");
    turno.innerHTML = "Turno : "
    turno.className = "mt-5"
    turno.id = "turno"
    titulo.appendChild(turno)
    let boton = document.getElementById("empezar");
    boton.disabled = true
    console.log("a")
    boton.style.transition = "1s ease-in-out"
    boton.style.backgroundColor = "#8a8a8a"
    boton.style.borderColor = "#5b5b5b"
    for(let i = 1; i<10; i++){
        document.getElementById(`casilla${i}`).innerHTML = ""
    }
    for(let i = 1; i<10; i++){
        document.getElementById(`casilla${i}`).addEventListener("click", function handleclick(){
            if(juegoiniciado){
                elementoclickeado = i;
                let elementoencontrado = elementosClickeados.some(value => elementoclickeado === value)
                console.log(elementoencontrado)
                if (!elementoencontrado){
                    document.getElementById(`casilla${i}`).innerHTML = turn;
                    realizarJugada()
                }
                if (!elementosClickeados.includes(elementoclickeado)){
                    elementosClickeados.push(elementoclickeado)
                }
                console.log(elementosClickeados)

            }
        })
    }
    juegoiniciado = true
}
function realizarJugada(){
    if(juegoiniciado){
        if(turn === "❌"){
            añadirElementoAlTablero()
            validarGanador(turn)
            turn = "⭕"
            document.getElementById("turno").innerHTML = `Turno : ${turn}`

        }
        else if(turn ==="⭕"){
            añadirElementoAlTablero()
            validarGanador(turn)
            turn = "❌";
            document.getElementById("turno").innerHTML = `Turno : ${turn}`

        }
    }
}

function añadirElementoAlTablero(){
    if (elementoclickeado == 1){
        tablero[0][0] = turn
        console.log(tablero)
    }
    if (elementoclickeado == 2){
        tablero[0][1] = turn
        console.log(tablero)

    }
    if (elementoclickeado == 3){
        tablero[0][2] = turn
        console.log(tablero)

    }
    if (elementoclickeado == 4){
        tablero[1][0] = turn
        console.log(tablero)

    }
    if (elementoclickeado == 5){
        tablero[1][1] = turn
        console.log(tablero)

    }
    if (elementoclickeado == 6){
        tablero[1][2] = turn
        console.log(tablero)

    }
    if (elementoclickeado == 7){
        tablero[2][0] = turn
        console.log(tablero)
    }
    if (elementoclickeado == 8){
        tablero[2][1] = turn
        console.log(tablero)
    }
    if (elementoclickeado == 9){
        tablero[2][2] = turn
        console.log(tablero)
    }

}

function validarGanador(caracter){
    //caracter circulo ⭕
    for (let i = 0; i < 3; i++) {
        if (tablero[i][0] === caracter && tablero[i][1] === caracter && tablero[i][2] === caracter) {
            if (i === 0){
                let arraynumber = [1,2,3]
                rondaFinalizada(arraynumber)
                endGame(caracter)
            }
            if (i === 1){
                let arraynumber = [4,5,6]
                rondaFinalizada(arraynumber)
                endGame(caracter)

            }
            if(i === 2){
                let arraynumber = [7,8,9]
                rondaFinalizada(arraynumber)
                endGame(caracter)

            }
            console.log(`Gano ${caracter}!!`);
        }
    }

    for (let i = 0; i < 3; i++) {
        if (tablero[0][i] === caracter && tablero[1][i] === caracter && tablero[2][i] === caracter) {
            if (i === 0){
                let arraynumber = [1,4,7]
                rondaFinalizada(arraynumber)
                endGame(caracter)

            }
            if (i === 1){
                let arraynumber = [2,5,8]
                rondaFinalizada(arraynumber)
                endGame(caracter)

            }
            if(i === 2){
                let arraynumber = [3,6,9]
                rondaFinalizada(arraynumber)
                endGame(caracter)
            }
            console.log(`Gano ${caracter}!!`);
        }
    }

    if (tablero[0][0] === caracter && tablero[1][1] === caracter && tablero[2][2] === caracter) {
        let arraynumber = [1,5,9]
        rondaFinalizada(arraynumber)
        endGame(caracter)
        console.log(`Gano ${caracter}!!`);
    }

// Check anti-diagonal
    if (tablero[0][2] === caracter && tablero[1][1] === caracter && tablero[2][0] === caracter) {
        let arraynumber = [3,5,7]
        rondaFinalizada(arraynumber)
        endGame(caracter)
        console.log(`Gano ${caracter}!!`);
    }


}

function rondaFinalizada(array){
    for(let i = 0; i <3; i++){

        let color = document.getElementById(`casilla${array.at(i)}`).getAttribute("hovercolor");
        let backgroundcolor = document.getElementById(`casilla${array.at(i)}`).style.backgroundColor
        origincolors[`casilla${array.at(i)}`] = backgroundcolor
        document.getElementById(`casilla${array.at(i)}`).style.backgroundColor = color
        console.log(origincolors)

    }
    let arr = [1,2,3,4,5,6,7,8,9]
    let arrayOpacidad = arr.filter(value => !array.includes(value));
    arrayOpacidad.forEach(value => {
        document.getElementById(`casilla${value}`).style.opacity = "0.5"
    })
}

function endGame(ganador){
    document.getElementById("titulo").innerHTML = `Gano ${ganador}!!`;
    let boton = document.createElement("button")
    boton.style.backgroundColor = "#61d542"
    boton.id = "endronda"
    boton.style.borderColor = "#4ea537"
    boton.innerHTML = "Nueva Ronda"
    boton.style.transition = "1s ease-in-out"
    boton.className = "fade-in"
    boton.addEventListener("click",function (){
        tablero = [
            ["","",""],
            ["","",""],
            ["","",""]
        ]
        turn = ""
        juegoiniciado = true
        elementoclickeado = 0
        elementosClickeados = []
        for(let i = 1; i<10; i++){
            document.getElementById(`casilla${i}`).innerHTML = ""
            document.getElementById(`casilla${i}`).style.opacity = "1"

        }
        for (let i = 0; i<3; i++){
            let llaves = Object.keys(origincolors)
            let llave = llaves[i]
            let valor = origincolors[llave]
            document.getElementById(`${llave}`).style.backgroundColor = valor
        }
        document.getElementById("endronda").remove()
        roundStart()
        origincolors = {}

    } )
    if(ganador === "⭕") {
        puntuacionO+=1
        document.getElementById("puntuacionO").innerHTML = `⭕:${puntuacionO}`
    }
    if(ganador === "❌"){
        puntuacionX+=1
        document.getElementById("puntuacionX").innerHTML = `❌:${puntuacionX}`
    }
    document.querySelector("div.botones").appendChild(boton)

    juegoiniciado = false
}



