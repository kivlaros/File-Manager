import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { getPath } from '../assist/get-path.js';
import path from 'path';

export async function copy(comandTextArr) {
    const pathsObj = getPath(comandTextArr,false)
    const fileName = comandTextArr[0]
    const fileDest = path.join(pathsObj.dest,fileName)
    const readStream = createReadStream(pathsObj.source);
    const writeStream = createWriteStream(fileDest);
    try{
        await pipeline(
            readStream,
            writeStream
          );

    }catch(err){
        throw new Error(err.message)
    }
}