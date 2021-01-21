const express = require('express');
const hbs = require('hbs');
const constants = require('./constants');

const app = express();
app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', constants.VIEWS_DIR);
hbs.registerPartials(constants.PARTIAL_DIR);


app.get('', (req, res)=>{
    res.render('index', {
        title: 'Lol'
    });
});


app.listen(3000, ()=> console.log('Server is running on port 3000') );