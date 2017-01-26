/**
 * Created by creedh on 1/26/17.
 */
console.log('Loading Server');
const WEB = __dirname.replace('server', 'public');
const SERV = __dirname;

console.log(WEB)
console.log(SERV)

//===================== Get Primary Modules =======================
let express = require('express');
let fs = require('fs');

//===================== Get Middleware Modules =======================
// let logger = require('morgan');
let compression = require('compression');
// let favicon = require('serve-favicon');
let bodyParser = require('body-parser');

//====================== Create EXPRESS App =======================
let app = express();

// insert middleware
// app.use(logger('dev'));
app.use(compression());
// app.use(favicon(WEB + '/img/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//====================== STATIC FILES =======================
app.use(express.static(WEB)); //Website Files
// app.use('/api/student-images', express.static('student-images')); //Student images
app.get('*', function (req, res) {
    // res.status(404).sendFile(WEB + '/404Error.html');
});


//====================== START SERVER =======================
let server = app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server Running on port: " + process.env.PORT);
});


//====================== SHUTDOWN HANDLING =======================
function gracefullShutdown() {
    console.log('\nStarting Shutdown');
    server.close(function () {
        console.log('\nShutdown Complete');
    });
}

process.on('SIGTERM', function () {
    gracefullShutdown();
});

process.on('SIGINT', function () {
    gracefullShutdown();
});

// SIGKILL (kill -9) can't be caught by any process, including node
// SIGSTP/SIGCONT (stop/continue)


//======================== END SETUP =======================
// SERVER IS A GO!!!
