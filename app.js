const express = require('express');
//const { use } = require('express/lib/application');
const bodyParser= require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));


app.use('/',(req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-products', (req, res, next) => {
    console.log('in the add product middleware');
    res.send('<form action="/product" method="POST" ><input type="text" name="title"><button type="submit">Add Product </button> </form>');
    // next(); //allows the request to the next middleware
});
app.post('/product',(req,res,next) =>{
    console.log('in the product middleware');
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('in another middleware');
    res.send('<h1>hello from express</h1>')
    // next(); //allows the request to the next middleware
});

app.listen(3000);
