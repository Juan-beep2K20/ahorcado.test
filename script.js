

let intentos = 0;
let letra;//letra que se va a validar
const indices = []//donde se encuentra la letra
let toShow = []//lineas que se muestran en pantalla
let numaleat = getRandomInt(list.length)//num aleat
let show = document.createElement('vble')//creación de elemento a mostrar
let ganado = document.createElement('winner')//creación de elemento a mostrar
let word2play = list[numaleat];//palabra para jugar
let wordwtild = word2play;//palabra sin tildes
    for (let i = 0; i < word2play.length; i++) {
        toShow[i] = '-'
    }


function getRandomInt(value) {
    return Math.floor(Math.random() * value);
}

function showtxt(){
    show.innerText = toShow.join('')
    //parte para mostrar en la pantalla 
    console.log(document)
    document.body.appendChild(show)
}
function ganador(){
    ganado.innerText=["has ganado"];
    //parte para mostrar en la pantalla 
    console.log(document)
    document.body.appendChild(ganado)
}



console.log(word2play) //palabra con la que se va a jugar

const ref = document.querySelector("#entrada")
console.log(ref.value)//recepción del imput


function validar_general() {
    letra = ref.value;
    console.log(letra)
    remplazar()
    replace(indices)
    validar()
}

function remplazar() {
    let acent = ["á", "é", "í", "ó", "ú"]
    let sinac = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < acent.length; i++) {
        
        if (word2play.indexOf(acent[i]) != -1) {
            wordwtild = wordwtild.replace(acent[i], sinac[i])

        }
    }
    console.log({wordwtild})
    
}


function validar() {

    let indx = -1
    if (wordwtild.includes(letra)) {
        indx = wordwtild.indexOf(letra)
        while (indx != -1) {
            indices.push(indx)
            indx = wordwtild.indexOf(letra, indx + 1)

        }
        console.log(indx)
    }else{
        console.log("no se encuentra esa letra")
    }

    console.log(indices)

    //cambio de índice por el valor en el array que se muestra
    replace(indices)
    console.log(toShow)

    addintento()
}



function addintento() {
    intentos = intentos + 1
    console.log("intento: " + intentos)
}

function replace(indices){
    for (let i =0;i<indices.length;i++){
        toShow[indices[i]]=word2play[indices[i]];
        
    }
    
}
function win(){
    if(indices.length>=word2play.length){
        console.log("   has ganado ")
        ganador()
    }
}