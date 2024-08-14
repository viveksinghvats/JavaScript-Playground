const express = require('express');
const app = express();
const stream = require('./stream');
const cluster = require('./cluster');
const status = require('express-status-monitor');

const port = 8000;

app.use('/stream', stream);
app.use('/cluster', cluster);
app.use(status());

app.listen(port,  () =>{
    console.log('Server running on port:'+ port);
});