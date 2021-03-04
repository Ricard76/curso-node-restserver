const express = require('express');
const colors = require('colors');
const cors = require('cors')

class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewears
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    middlewares(){

        // CORS
        this.app.use( cors() );

        // Parseo y lectura del body
        this.app.use( express.json() );

        // Directorio público
        this.app.use( express.static('public') );

    }

    routes(){
        this.app.use( this.usuariosPath, require('../routes/user.routes'));
    }

    listen(){
        this.app.listen( this.port, () => {
            console.clear();
            console.log('Servidor corriendo en el puerto '.blue, this.port.yellow);
        });        
    }

}

module.exports = Server;