// es una funcion del arrray que permite filtrar elementos del array

const frutas = [
    "manzana",
    "Pera",
    "Durazno",
    "Banana"
]

const frutasFiltras = frutas.filter(function(fruta) {
    if (fruta === "Pera"){
        return false

    } else {
    return true
}
})

console.log(frutas)
console.log(frutasFiltras)


// es lo mismo que

const filtroDeFrutas2 = function (fruta) {
    if(fruta === "Pera"){
        return false
    } else {
        return true
    }
}

const frutasFiltradas2 = frutas.filter(filtroDeFrutas2)

console.log(frutas)
console.log(frutasFiltradas2)


// es lo mismo que

const frutasFiltradas3 = frutas.filter(fruta => fruta !== "Pera")

console.log(frutas)
console.log(frutasFiltradas3)