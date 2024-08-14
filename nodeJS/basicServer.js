const http = require('http');
const https = require('https');


const server = http.createServer(async (req, res) => {
    https.get('https://microsoftedge.github.io/Demos/json-dummy-data/256KB-min.json', (value) => {
        let data = '';
        value.on('data', (chunk) => {
            data += chunk;
        });

        value.on('end', () => {
            try { 
                const jsonData = JSON.parse(data);
                res.end(JSON.stringify(jsonData));
            } catch (error) {
                res.end(error);
            }
        })
    }).on('error', (err) => {
        res.end(err);
    })
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running on 3000');
})

