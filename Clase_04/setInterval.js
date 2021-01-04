function futuro () {
    console.log ("Empecé futuro")
    setInterval (function(){
       console.log("Intervalo")
    }, 3000)                               // 3000 en la cantidad de milisengundos que va a esperar


}

function main () {

   console.log("Empezó main")
   futuro ()
   console.log("Terminó main")
}

main()