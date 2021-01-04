const frutas = [
"manzana",
"banana"
]



function iterador (fruta){

    console.log(fruta)
}

frutas.forEach(iterador)



// es lo mismo que

const iterador2 = (fruta) => console.log(fruta)

frutas.forEach(iterador2)