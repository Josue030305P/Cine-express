const express = require('express');
const app = express();
const port = 3000;


// Definir mi motor de plantillas

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Incorporar mi router
app.use('/', require('./router.js'));

app.listen(port, () => {
    console.log(`Servidor ejecutado http://localhost:${port}`);
})