import { CIPOLISTA } from "./adat.js";
import { FelsorolasOsszeallit, listaConsolraIR } from "./fuggveny.js";
console.log(CIPOLISTA)

listaConsolraIR(CIPOLISTA)
/*Írd ki a consolra a cipőlista típusait! mehet mellé ar ára is!*/



/*HTML DOM-ba írjuk ki felsorolásban*/
/*1. megfogjuk a html megfelelő elemét */
const CIPOELEM = document.querySelector("#cipok")
console.log(CIPOELEM)

/*2. Összeállítjuk a html kódot,és */
let txt= FelsorolasOsszeallit(CIPOLISTA)
    

/*3. Beletesszük az elemeket*/
CIPOELEM.innerHTML = "<h3>Szép nap van, vegyünk egy cipőt</h3>"
CIPOELEM.innerHTML += txt;