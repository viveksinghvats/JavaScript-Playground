const express = require('express');
const basicRouter = require('./basicExpressRoute');

const app = express();

app.use(basicRouter);
app.listen(4999, () => {
    console.log('Server Started a port 4999');
})