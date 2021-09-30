// ubicar por su ID
//   document.getElementById('nombreID')

// ubicar por nombre de etiqueta (tagName)
let enlaces = document.getElementsByTagName('a');
    console.log(enlaces);
let parrafos = document.getElementsByTagName('p');

//nodificar bgc de segundo enlace
    enlaces[1].style.backgroundColor = '#ef8daa';
//modificar bgc de todos los parrafos
    let cantidad = parrafos.length;
    for( let n=0; n<cantidad; n++ ){
        parrafos[n].style.backgroundColor = '#8defaa';
    }



