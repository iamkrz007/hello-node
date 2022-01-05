const express = require('express');

const app = express();

app.use('/add-products', (req, res, next) => {
    console.log('in the add product middleware');
    res.send('<h1>Add product page</h1>')
    // next(); //allows the request to the next middleware
});
app.use('/', (req, res, next) => {
    console.log('in the middleware');
    res.send('<h1>hello from express</h1>')
    // next(); //allows the request to the next middleware
});

app.listen(3000);
