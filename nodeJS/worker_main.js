const { Worker } = require('worker_threads');


async function mainCallingWorker(data) {
   return new Promise((resolve, reject) => {
      const worker = new Worker('./worker.js', { data });

      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
         if (code !== 0) {
            console.log(`Worker Thread has been stooped with a code ${code}`);
         }
      });
   })
}

mainCallingWorker(2).then((data) => {
   console.log("Printed after " + data + " seconds");
}).catch((err) => {
   console.log(err);
})