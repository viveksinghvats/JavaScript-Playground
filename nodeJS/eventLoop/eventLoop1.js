const fs = require('fs');
setImmediate(() => {
    console.log('Set Immediate CB');
});

setTimeout(() => {
    console.log('Set Timeout CB');
}, 0);

fs.readFile('./file.txt', 'utf-8', () => {
   console.log('File Read CB');
});

Promise.resolve('Promise').then(console.log);

process.nextTick(() =>console.log('Process.nextTick'));