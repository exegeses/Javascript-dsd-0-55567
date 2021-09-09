//ubicar elemento dentro del DOM
var txt = document.getElementById('txt');

//pedimos ingreso de un dato
var numero1 = prompt('ingrese un número');
var numero2 = prompt('ingrese otro número');

var suma = numero1 + numero2;

    txt.innerText = suma;