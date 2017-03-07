var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var port = 3000;


//View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname,'client')));

//body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes

app.use('/',index);

app.listen(port,function(){
    console.log('Server started at '+port);
});