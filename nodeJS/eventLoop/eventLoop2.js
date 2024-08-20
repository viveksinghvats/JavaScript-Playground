const fs = require('fs'); 


setImmediate(() => {
    console.log('Set Immediate CB');
});

setTimeout(() => {
    console.log('Set Timeout');
}, 0);

fs.readFile('./file.txt', 'utf-8', () => {
    setTimeout(() => {
        console.log('2nd setTimeOut');
    }, 0);
    
    setImmediate(() => {
        console.log('2nd set Immediate');
    });
    Promise.resolve('2nd Promise').then(console.log);

    process.nextTick(() => {
        console.log('2nd Process.nextTick');
    })
    console.log('File Read CB');
});

Promise.resolve('Promise').then(console.log);

process.nextTick(() => {
    console.log('Process.nextTick');
});


/**
 * Process.nexTick
 * Promise
 * Set Timeout
 * Set Immediate CB
 * File Read CB
 * 2nd Procees.nextTick
 * 2nd Promise
 * 2nd setImmediate  => Because event loops is at Poll phase, sitting idle, so next phase is check phase.
 * 2nd Timeout
 */