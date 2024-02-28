

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
    let ar="";
    for (let index = 0; index < lista.length; index++) {
        ar +=lista[index].ar;    
    }
    console.log(ar);
    return ar;




}

export function legdragabbtermek(lista){
    let maxIndex = 0;
    for (let index = 0; index < lista.length; index++) {
       if (lista[maxIndex].ar < lista[index].ar){
            maxIndex=index;

       } 
        
    }
    return maxIndex;


}
export function koromcipodb(lista){
    let db = 0
    for (let index = 0; index < lista.length; index++) {
        
        
    }
}