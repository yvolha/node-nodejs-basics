import { fork } from 'child_process';
import { join, dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const scriptFile = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    fork(scriptFile, args, { stdio: ['inherit', 'inherit', 'inherit', 'ipc']});
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['greenArg1', 'yellowArg2', 'redArg3']);
