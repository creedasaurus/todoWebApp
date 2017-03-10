/**
 * Created by creed on 3/6/2017.
 */
const hostname = '127.0.0.1';
const port = 3000;

let express = require('express');
let fs = require('fs');

let logger = require('morgan');
let compression = require('compression');
let favicon = require('favicon');
let bodyParser = require('body-parser');


let app = express();
app.disable('x-powered-by');

app.use(logger('dev'));
app.use(compression());
// TODO: get favicon working
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/view'))

const server = app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});

function gracefullShutdown() {
    console.log('Starting shutdown');
    server.close(()=>{
        console.log('Shutdown complete');
    });
}

process.on('SIGTERM', ()=>{
    gracefullShutdown()
});

process.on('SIGINT', ()=>{
    gracefullShutdown()
});