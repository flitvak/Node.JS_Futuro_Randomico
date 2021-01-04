const bebidas = [
    "cerveza",
    "vino",
    "vodka"

]

console.log(bebidas)

// estructura for

for (let i = 0; i<bebidas.length; i++){

    const bebida2 = bebidas[i]
    console.log(bebida2)
}

// para reccorer el array de atras para adelante

for (let i = bebidas.length - 1; i >= 0;  i--){  /*hay que poner el -1 porque sino empieza en la 
                                                 posicion 3 del array que no existte*/

    const bebida3 = bebidas[i]
    console.log(bebida3)
}



// WHILE
let i = 0 
while (i < bebidas.length) {
const bebida4 = bebidas[i]
console.log(bebida4)
i++
}


// While con una variante - va a cortar al encontrar vino

let j = 0
let encontrado = false

while ((j < bebidas.length) && !encontrado){
const bebida4 = bebidas [j]

if(bebida4 === "vino"){
    encontrado = true
}
console.log (bebida4)
j++
}


// otra forma de iterar en lugar del foreach

for (const bebida6 of bebidas){
    console.log(bebida6)
}