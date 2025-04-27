const mysql = require('mysql');
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'cine'
});

conexion.connect((error => {
    if (error) {
        console.error('Error al conectar la DB', error);
        return;
    }

    console.log('Conectado a la base de datos');
}));

module.exports = conexion;