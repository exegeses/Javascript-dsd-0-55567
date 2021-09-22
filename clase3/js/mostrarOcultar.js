//ubicar elemento dentro del DOM
var caja = document.getElementById('caja');

//declaramos funciones de control
function ocultarCaja()
{
    caja.style.display = 'none';
}
function mostrarCaja()
{
    caja.style.display = 'block';
}

/* propuesta de Naty similar Pablo */
function mostrarOcultarCaja(){
    if( caja.style.display == 'none'){
        mostrarCaja();
    }else{
        ocultarCaja();
    }
}
/* propuesta de Mauro */
var visible = true;
function mostrarOcultar()
{
    if(visible){
        ocultarCaja();
        visible = false;
    }
    else{
        mostrarCaja();
        visible = true;
    }
}