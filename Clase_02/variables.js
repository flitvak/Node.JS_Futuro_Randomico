const persona = {
    nombre: "Federico",
    apellido: "Litvak"
}

const propiedades = Object.keys(persona)

propiedades.forEach(function(propiedad) {

console.log(`${propiedad}: ${persona[propiedad]}`)


})