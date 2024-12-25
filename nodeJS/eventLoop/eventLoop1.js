const fs = require('fs');
// setImmediate(() => {
//     console.log('Set Immediate CB');
// });

// setTimeout(() => {
//     console.log('Set Timeout CB');
// }, 0);

// fs.readFile('./file.txt', 'utf-8', () => {
//    console.log('File Read CB');
// });

// Promise.resolve('Promise').then(console.log);

// process.nextTick(() =>console.log('Process.nextTick'));


process.nextTick(() => {
    console.log('Process');
});

new Promise((resolve, reject) => {
    console.log('Promise before');
    setTimeout(() => {
        console.log('Timeout inside Promise');
        resolve('pass');
    }, 0);
    setTimeout(() => {
        console.log('Timeout inside Promise without resolve');
    }, 0);
    process.nextTick(() => {
        console.log('Process in promise');
    });
    console.log('Promise After');
}).then(console.log);


Promise.resolve('Promise 2').then(console.log);

setTimeout(() => {
    console.log('Timeout after 1 sec');
    fs.readFile('./file.txt', 'utf-8', () => {
        console.log('File read');
    });
}, 1000);


// Promise befor
// Promise after
// Process
// Process in promise
// Promise 2
// Timeout inside Promise
// pass
// Timeout inside Promise without resolve