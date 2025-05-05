import readline from 'readline';
import process from 'process';
import os from 'os';
import router from './modules/router.js';

const userName = 'Unnamed'

process.chdir(os.homedir());

app()

function app(){
        const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
          
        rl.on('line', input => {
                  if (input === '.exit'){
                    rl.close();
                    console.log(`\nThank you for using File Manager, ${userName}, goodbye!`);
                  }else{
                    router(input)
                  }
            });
          
        rl.on('SIGINT', () => {
                console.log(`\nThank you for using File Manager, ${userName}, goodbye!`);
                process.exit();
            });
}