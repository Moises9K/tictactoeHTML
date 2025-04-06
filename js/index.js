document.addEventListener("DOMContentLoaded", function (){
    let coloresAleatorios = ["#FFDEFC","#ED8EA4","#FAF9D2","#B3D4AD","#A4DDED","#FFC0A5","#EBC9FF"]
    for(let i = 1; i<10;i++){
        let casilla = document.getElementById(`casilla${i}`)
        let numrandom = obtenerNumAleatario(coloresAleatorios.length);
        casilla.style.backgroundColor = coloresAleatorios[numrandom];
        añadirHover(coloresAleatorios[numrandom],i);
        console.log("a")
    }
})

//document.getElementById("empezar").addEventListener("click",function(){
//    empezarRonda()
//})

function añadirHover(color, num) {
    let hoverColor;
    // Determine hover color based on initial color
    switch (color) {
        case "#FFDEFC":
            hoverColor = "#FF8EF6";
            break;
        case "#ED8EA4":
            hoverColor = "#FF678A";
            break;
        case "#FAF9D2":
            hoverColor = "#FEFB7B"; // Corrected the double # here
            break;
        case "#B3D4AD":
            hoverColor = "#8DFB79";
            break;
        case "#A4DDED":
            hoverColor = "#6CDEFE";
            break;
        case "#FFC0A5":
            hoverColor = "#FF976B";
            break;
        case "#EBC9FF":
            hoverColor = "#DA9CFF";
            break;
    }

    // Apply the hover effect by adding CSS directly
    let style = document.createElement("style");
    style.innerHTML = `
        #casilla${num}:hover {
            background-color: ${hoverColor} !important;
            color: ${hoverColor};
            cursor: pointer;
        }  `
    document.head.appendChild(style);
    document.getElementById(`casilla${num}`).setAttribute("hoverColor",hoverColor);

}

function obtenerNumAleatario(max){
    return Math.floor(Math.random() * max)
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
}

