//ubicar elemento dentro del DOM
var txt = document.getElementById('txt');

//pedimos ingreso de un dato
var numero1 = prompt('ingrese un número');
var numero2 = prompt('ingrese otro número');

//var suma = parseInt (numero1) + parseInt (numero2);
var suma = parseFloat (numero1) + parseFloat (numero2);
//numero1 = new Number( numero1 );
//numero2 = new Number( numero2 );
//var suma = numero1 + numero2;

    txt.innerText = suma;


