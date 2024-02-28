

export function listaConsolraIR(lista) {
    for (let index = 0; index < lista.length; index++) {
        console.log(lista[index].tipus, lista[index].ar)

    }
}

export function FelsorolasOsszeallit(lista) {
    let txt = "<ul>";
    for (let index = 0; index < lista.length; index++) {
        txt += (`<li>Típus:${lista[index].tipus},ár:${lista[index].ar}</li>`);


    }
    txt += "</ul>"
    console.log(txt);
    return txt
}


export function dives(lista){
    let txt = "";
    for (let index = 0; index < lista.length; index++) {


        txt+="<div class='termek'>"
        txt+=`<h3> Típus:${lista[index].tipus}</3>`
        txt+=`<p> Típus:${lista[index].szín}<p/>`
        txt+=`<p> Típus:${lista[index].ar}<p/>`

        txt+="</div>";
    }

    console.log(txt);
    return txt;





}



export function Osszar(lista){
    let txt="";
    for (let index = 0; index < lista.length; index++) {
        
        
    }




}