import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';
import { getPath } from '../assist/get-path.js';

export async function decompress(comandTextArr) {
    const pathsObj = getPath(comandTextArr,false)
    const readStream = createReadStream(pathsObj.source)
    const writeStream = createWriteStream(pathsObj.dest)
    const broltiDecompress = createBrotliDecompress()

    try{
        pipeline(
            readStream,
            broltiDecompress,
            writeStream
        )
    }catch(err){
        throw new Error(err.message)
    }
}