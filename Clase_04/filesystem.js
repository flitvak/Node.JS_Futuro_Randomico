const fs = require ("fs") // fs es un modulo que viene por default

const objeto = {
    nombre: "cerveza",
    precio: 10,
    marcas: [
        "Quilmes",
        "Stella Artois",
        "Patagonia"
    ]
}

// grabar en disco
const objetoString = JSON.stringify(objeto, null, 4) // el null y el 4 es para que se vea mas lindo el archivo que se genera

fs.writeFileSync("./objeto.json", objetoString) // objeto es como se va a llamar el archivo
// fin grabar en disco

// inicio leer de disco

const stringObjeto = fs.readFileSync("./objeto.json")
const objetoDesdeString = JSON.parse(stringObjeto)
console.log(objetoDesdeString)