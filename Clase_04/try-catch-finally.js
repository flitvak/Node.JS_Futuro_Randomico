try{
const vodka = 120  
vodka = 20                 /*se va a "romper" porque vodka es CONST y no puede cambiar de valor - para que cambie debería
                            ser VAR o LET */
console.log(vodka)

} catch (error){

    console.log("Falló el código")
    console.log(error.message)
    console.log(typeof error)


}