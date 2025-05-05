import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { getPath } from '../assist/get-path.js';

export async function calculateHash(comandTextArr){
    const source = getPath(comandTextArr)
    const readStream = createReadStream(source);
    const hash = createHash('sha256');
    try {
        readStream
          .on('data', (chunk) => hash.update(chunk))
          .on('end', () => {
            const hexHash = hash.digest('hex');
            console.log(hexHash);
          }).on('error', (error) => {
            throw new Error(`File read error: ${error.message}`);
          })
        } catch (err) {
            throw new Error(err.message)
        }
    }