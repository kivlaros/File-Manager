import readline from 'readline';
import process from 'process';
import os from 'os';
import router from './modules/router.js';

export const vars = {
    homeDir: os.homedir(),
    currentDir: os.homedir(),
    userName: 'Unnamed'
}

process.chdir(os.homedir());

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
    try{
        if (input === 'exit') rl.close();
        router(input)
        console.log( process.cwd())
    }catch(err){
        console.log(err.message)
    }
  });

rl.on('SIGINT', () => {
    console.log('\nПрограмма остановлена.');
    process.exit();
});