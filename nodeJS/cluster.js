const http = require('http');
const cluster = require('node:cluster');
const os = require('os');

const totalCPUS = os.cpus().length;

console.log(totalCPUS);

if (cluster.isPrimary) {
   for(let i = 0; i < totalCPUS; i++){
     cluster.fork();
   }
} else {
    const server = http.createServer((req, res) => {
        res.end('Process running on pid:' + process.pid);
    });

    server.listen(5000, '127.0.0.1', () => {
        console.log('Server running on port 5000');
    });
}
