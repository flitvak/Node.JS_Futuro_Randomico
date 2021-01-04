const autos = [
    { Marca: 'Nissan',
      Modelo: "Tiida",
      Year: 2010 },

    { Marca: 'Nissan',
      Modelo: 'Versa',
      Year: 2011 },

    { Marca: 'VW',
      Modelo: 'Polo',
      Year: 2003 },

    { Marca: 'Chery',
      Modelo: 'Tiggo',
      Year: 2012 }
]

function calcularSeguro (automovil){
let valorSeguro = 0

switch (automovil) {
case 2010:
valorSeguro = 1000
break

case 2011:
valorSeguro = 1200
break

case 2012:
valorSeguro = 1300
break

default:
valorSeguro = 500
break
}
return valorSeguro
}


let seguroTotal = 0

autos.forEach (function (auto){
let seguroPorAuto = calcularSeguro(auto.Year)   
seguroTotal += seguroPorAuto
console.log(`El vehiculo ${auto.Marca} ${auto.Modelo} pagará $${seguroPorAuto}`)
})

console.log(`El total del seguro a pagar es $${seguroTotal}`)