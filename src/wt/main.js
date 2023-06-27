import { Worker } from "worker_threads";
import { cpus } from "node:os";
import { join, dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const workerFile = join(__dirname, 'worker.js');

const performCalculations = async () => {
    const cpuNum= cpus().length;
    let numToSend = 10;

    const results = [];
    
    for (let i = 0; i < cpuNum; i++) {
      results.push(
        new Promise((resolve, reject) => {
          const worker = new Worker(workerFile);
          worker.postMessage(numToSend);
          worker.on('message', (result) => resolve({ status: 'resolved', data: result }));
          worker.on('error', () => reject({ status: 'error', data: null }));

          numToSend += 1;
        })
      )
    }

    const writeable = (await Promise.allSettled(results)).map(x => x.value);
    console.log(writeable);
    process.exit();
};

await performCalculations();