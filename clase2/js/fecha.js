/*########################################
*  08/09/2021
* */
// ubicamos elemento dentro del DOM
var txt = document.getElementById('txt');

//creamos objeto de fecha
var fecha = new Date();

//obtenemos número del día del mes
var diaMes = fecha.getDate();
    if( diaMes < 10 ){
        diaMes = '0' + diaMes;
    }

//obtenemos número del mes actual
var mes = fecha.getMonth() + 1;
    if( mes < 10 ){
        mes = '0' + mes;
    }

//obtenemos el número del año actual
var anio = fecha.getFullYear();

//escribimos en el span
txt.innerText = diaMes +'/'+ mes +'/'+ anio;
