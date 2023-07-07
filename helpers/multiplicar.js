const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.yellow } ${ i } ${ '='.yellow } ${ base * i }\n`;
        }
        
        if (listar) {
            console.log('==================='.bold.red);
            console.log(`    Tabla del ${ base }`.bold.red);
            console.log('==================='.bold.red);
            console.log(consola);
        }
        
            
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
            
        return `tabla-${ base }.txt`.bold.green;
        
    } catch ( err ) {
        throw err
    }
}

module.exports = {
    crearArchivo
}