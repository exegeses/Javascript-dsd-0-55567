//ubicar elemento dentro del DOM
    let txt = document.getElementById('txt');

/* mostrar el nombre del día de la semana */
//creamos objeto de fecha
    let fecha = new Date();
//obtenemos número del día de la semana
    let nDiaSemana = fecha.getDay();
    /* Dom => 0 */
    /* Lun => 1 */
    /* Mar => 2 */
    /* Mié => 3 */
    /* Jue => 4 */
/* version usando if | else if
    if( nDiaSemana == 0 ){
        nDiaSemana = 'Domingo';
    }
    else if ( nDiaSemana == 1 ){
        nDiaSemana = 'Lunes';
    }
    else if ( nDiaSemana == 2 ){
        nDiaSemana = 'Martes';
    }
    else if ( nDiaSemana == 3 ){
        nDiaSemana = 'Miércoles';
    }
    else if ( nDiaSemana == 4 ){
        nDiaSemana = 'Jueves';
    }
    else if ( nDiaSemana == 5 ){
        nDiaSemana = 'Viernes';
    }
    else {
        nDiaSemana = 'Sábado';
    }
*/

/* versión usando switch
    switch ( nDiaSemana ){
        case 0:
            nDiaSemana = 'Domingo';
            break;
        case 1:
            nDiaSemana = 'Lunes';
            break;
        case 2:
            nDiaSemana = 'Martes';
            break;
        case 3:
            nDiaSemana = 'Miércoles';
            break;
        case 4:
            nDiaSemana = 'Jueves';
            break;
        case 5:
            nDiaSemana = 'Viernes';
            break;
        default:
            nDiaSemana = 'Sábado';
            break;
    }
*/

    let nombres = [
                    'Marcos','Mitsuha','Joaquín',
                    'Selene','Natsumi', 'Serafín'
                  ];
        console.log( nombres[1] );

/* versión usando un array */
let dias = [
            'Domingo', 'Lunes', 'Martes', 'Miércoles',
            'Jueves', 'Viernes', 'Sábado'
           ];

//imprimimos en el span
    txt.innerText = dias[ nDiaSemana ];