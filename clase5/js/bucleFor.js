    let autos = [
        'Aston Martin', 'Lotus', 'MacLaren',
        'Rover', 'Bugatti', 'Lamborghini',
        'Bentley', 'Vauxhal', 'Pagani'
    ];
    let cantidad = autos.length;
    //for( inicio; condicion; incremento ){
    document.write('<ul>');
    for ( let i = 0; i < cantidad; i++ ){
        document.write( '<li>', autos[i], '</li>' );
    }
    document.write('</ul>');