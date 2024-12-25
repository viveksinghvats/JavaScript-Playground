const express = require('express');
const app = express();
// const stream = require('./stream');
// const cluster = require('./cluster');
const asy = require('./asyncAwait');
// const status = require('express-status-monitor');

const port = 5600;

// app.use('/stream', stream);
// app.use('/cluster', cluster);
app.use('/asy', asy);
// app.use(status());

app.listen(port, () => {
    console.log('Server running on port:' + port);
});