const fs = require ('fs')
const path = require('path') /* sirve para que corra en distintos sistemas operativos, dado que las /
                                en los distintos sistemas operativos van para distinto lado*/
const ordenesPath = path.join(__dirname, 'input') // minuto 19:30

fs.readdir(ordenesPath, function (err, carpetasFechas){  /* el nombre "err" y "carpetas fechas" no importa -
                                                        puede tener cualquiernombre ej "error" y "archivos"*/ 
                                                         // readdir devulve un array con las carpetas   
    if (err){
        console.log('No pude leer el fileSystem')
    } else if (carpetasFechas && Array.isArray(carpetasFechas) && carpetasFechas.length) {
      console.log('Procesando carpetas con fechas...')
      carpetasFechas.forEach(function (carpetaFecha){
      const ordenesDeCompraPath = path.join(ordenesPath, carpetaFecha)
      fs.stat (ordenesDeCompraPath, function (errorStat, stats) {
         if (errorStat){
            console.log('Tuve un error al leer la carpeta ordenes de compra')
        } else if (stats.isDirectory()) { // is directory lo que hace es verificar que sea una carpeta
        console.log(`Procesando carpeta ${carpetaFecha}...`)
        fs.readdir(ordenesDeCompraPath, function (errorOrdenes, ordenesDeCompra){ 
            if (errorOrdenes){
                console.log('Tuve un error al leer las ordenes de compra', errorOrdenes)
            } else if (ordenesDeCompra && Array.isArray(ordenesDeCompra) && ordenesDeCompra.length){
              ordenesDeCompra.forEach(function(ordenDeCompraPath){
                if (ordenesDeCompraPath.endsWith('.json')){
                  const ordenDeCompraPathCompleto = path.join(ordenesDeCompraPath, ordenDeCompraPath)
                  fs.readFile(ordenDeCompraPathCompleto, function (errorOrdenCompra, dataOrden){
                  const jsonString = dataOrden.toString()
                  try{  
                    const jsonOrden = JSON.parse(jsonString)
                    console.log(`orden #${jsonOrden.id}`)
                    console.log(jsonOrden.id)
                  } catch (jsonError) {
                      console.log(jsonError)
                  }

                  })
                }
              })
            } else {
              console.log(`La carpeta de ordenes de ${carpetaFecha} esta vacia aparentemente`)  
            
            }
        })      
        } else {
        console.log(`Saltandome ${carpetaFecha}`)

      }
      })
        console.log(carpetaFecha)
      })
      console.log('Terminé de procesar carpeta de fechas!!!')
    } else {
      console.log('La carpeta esta vacía')
    }

})


/*console.log(__dirname)
console.log(ordenesPath)*/