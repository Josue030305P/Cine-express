const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

// Enrutador de GET
router.get('/', (req, res) => {
    conexion.query('SELECT * FROM peliculas', (error, results) => {
    if (error) {
        console.log('Error al obtener las peliculas', error);
    } else {
        res.render('index', {title:'Pelculas', peliculas:results});
    } 


    });
});



router.get('/create', (req, res) => {
    res.render('create');
});


router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM peliculas WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error('Error al obtener la película',error);

        } else {
            res.render('edit', {pelicula: results[0]});
        }

    });
});


router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM peliculas WHERE id = ?', [id], (error, results) => {
        if ( error) {
            console.error('Error al eliminar la película');
        } else {
            res.redirect('/');
        }
    });
});




const curdController = require('./controllers/crud');
router.post('/save', curdController.save);
router.post('/update', curdController.update);
module.exports  = router;

