const conexion = require('../database/db');


exports.save = (req, res) => {
    const titulo = req.body.titulo;
    const director = req.body.director;
    const lanzamiento = req.body.lanzamiento;
    const calificacion = req.body.calificacion;
    const genero  = req.body.genero;

    conexion.query(
        "INSERT INTO peliculas SET ?",
            {titulo:titulo, director:director, lanzamiento:lanzamiento,calificacion:calificacion, genero:genero},
            (error, results) => {
                if (error) {
                    console.error('Error al guardar película', error);
                }
                else {
                    res.redirect('/');
                }
               
            }


    );

};

exports.update = (req, res) => {
    const id = req.body.id;
    const titulo = req.body.titulo;
    const director = req.body.director;
    const lanzamiento = req.body.lanzamiento;
    const calificacion = req.body.calificacion;
    const genero = req.body.genero;

    conexion.query(
        "UPDATE peliculas SET ? WHERE id = ?",
        [{titulo:titulo, director:director, lanzamiento:lanzamiento, calificacion:calificacion,genero:genero}, id],
        (error, results) => {
            if (error) {
                console.error('Error al actulizar pelicula', error);
            }
            else {
                res.redirect('/');
            }
        }
    
    );
};


