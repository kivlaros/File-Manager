import { createReadStream } from 'fs';
import path from 'path';
import { once } from 'events';

export async function readFileStream(comandTextArr){
    comandTextArr.shift()
    const filePath = path.join(comandTextArr.join(' '))
    const readStream = createReadStream(filePath,'utf-8')
    try{
        readStream.pipe(process.stdout);
        await once(readStream, 'end');
        console.log('\n')
    }catch(err){
        readStream.destroy();
        throw new Error(err.message)
    }
}