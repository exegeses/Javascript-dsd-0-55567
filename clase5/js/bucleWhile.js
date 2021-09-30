    let txt = document.getElementById('txt');
    let txt2 = document.getElementById('txt2');

    let n = 1;
    console.log('antes de while: ', n);
    while ( n < 15 ){
        document.write('hola <br>');
        console.log('dentro de while: ', n);
        n++; // n = n+1;
    }
    console.log('después de while: ', n);

    /* mostrar elementos de un array */
    let celulares = [
        'Xiaomi', 'Samsung', 'Motorola', 'Nokia',
        'Huawei', 'HTC', 'POCO', 'LG', 'Sony'
    ];

    n = 0;
    let cantidad = celulares.length;
    document.write('<ul>');
    while ( n < cantidad ){
        document.write('<li>',celulares[n], '</li>');
        n++;
    }
    document.write('</ul>');


    /*  */
    for ( let unCelu in celulares ){
        console.log( 'unCelu: ' + celulares[unCelu] )
    }