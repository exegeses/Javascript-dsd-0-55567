//ubicamos elementos dentro del DOM
let txtDias = document.getElementById('txtDias');
let txtHoras = document.getElementById('txtHoras');
let txtMinutos = document.getElementById('txtMinutos');
let txtSegundos = document.getElementById('txtSegundos');

//declaramos función de control
function countdown()
{
    let ahora = new Date();
    let final = new Date( 2022, 0, 1 );
    //conversión a timestamp:
    // tiempo en milisegundos desde 1º de enero de 1970
    let actual = ahora.getTime();
    let evento = final.getTime();
    //diferencia entre fechas expresada en milisegundos
    let diferencia = evento - actual;

    //obtenemos el tiempo en segundos, minutos, horas y dias
    let segundos = Math.trunc( diferencia/1000 );
        console.log( segundos );
    let minutos = Math.trunc( segundos/60 );
        console.log( minutos );
    let horas = Math.trunc( minutos/60 );
        console.log( horas );
    let dias = Math.trunc( horas/24 );
        console.log( dias );

    //calculamos los sobrantes de horas, minutos y segundos
    horas = horas%24;
    if( horas < 10 ){
        horas = "0" + horas;
    }
        console.log( horas );
    minutos = minutos%60;
    if( minutos < 10 ){
        minutos = "0" + minutos;
    }
        console.log( minutos );
    segundos = segundos%60;
    if( segundos < 10 ){
        segundos = "0" + segundos;
    }
        console.log( segundos );

    //imprimimos en el HTML
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}
//ejecutamos las función
countdown();
//actualizamos cada segundo
setInterval( countdown, 1000 )