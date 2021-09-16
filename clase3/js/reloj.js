//ubicar elemento dentro del DOM
var txt = document.getElementById('txt');

//declarar funcion/es de control
/* mostrar un reloj digital =  21:29 */
function reloj()
{
    //creamos objeto de fecha
    var fecha = new Date();

    //obtenemos las horas
    var horas = fecha.getHours();
    //obtenemos los minutos
    var minutos = fecha.getMinutes();
        if( minutos < 10 ){
            minutos = '0'+minutos;
        }
    //obtenemos los segundos
    var segundos = fecha.getSeconds();
        if( segundos < 10 ){
            segundos = '0'+segundos;
        }
    //escribimos en el span
    txt.innerText = horas +':'+ minutos +':'+ segundos;
}

//llamamos a la función reloj
reloj();

//actualizamos el llamado a la función reloj
setInterval( reloj, 1000 );