const express = require('express');
const route = express.Router();
const fs = require('fs');
const zlib = require('zlib');
route.get('/', (req, res) => {
    // ! Without stream ie. high memory usages.    
    //    fs.readFile('../large_file.txt', (err, data) => {
    //     res.end(data);
    //    })

    /*
     * With streams low usages of memory.
     * It also made an entry in the header of the response, transfer-encoding: chunked
    */

    const stream = fs.createReadStream('../large_file.txt', 'utf-8');

    stream.on('data', (chunk) => {
        res.write(chunk);
    });

    stream.on('end', () => {
        return res.end();
    });

});

route.get('/zip', (req, res) => {
    fs.createReadStream('../large_file.txt').pipe(
        zlib.createGzip().on('data', (chunk) => { res.write(chunk) }).on('end', () => res.end())
    );
})

module.exports = route;