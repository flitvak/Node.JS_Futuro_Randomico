// otra forma de declarar function`s

const calcularSeguro = function (param){ // calcular seguro es una funcion

    return 1000
}

const calcularSeguroPeroNoMeGustaSuCara = function (param){ // calcularSeguroPeroNoMeGustaSuCara es otra funcion

    return 2000
}

const imprimir = function (nombre, funcCalculo){ // imprimir es una funcion

    console.log(`${nombre} paga ${funcCalculo()}`)  
}

imprimir ("fede", calcularSeguro)
imprimir ("Juan", calcularSeguroPeroNoMeGustaSuCara)
