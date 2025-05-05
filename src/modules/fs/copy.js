import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { getPath } from '../assist/get-path.js';
import path from 'path';
import { unlink } from 'fs/promises';

export async function copyMove(comandTextArr,move=false) {
    const pathsObj = getPath(comandTextArr,false)
    const fileName = getBaseName(comandTextArr[0])
    const fileDest = path.join(pathsObj.dest,fileName)
    const readStream = createReadStream(pathsObj.source);
    const writeStream = createWriteStream(fileDest);
    try{
        await pipeline(
            readStream,
            writeStream
          );
        if(move){
            await unlink(pathsObj.source)
        }  
    }catch(err){
        throw new Error(err.message)
    }
}

function getBaseName(filePath) {
    const normalizedPath = filePath.replace(/\\/g, '/');
    return path.posix.basename(normalizedPath);
  }