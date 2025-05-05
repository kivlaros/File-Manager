import { unlink } from 'fs/promises';
import { getPath } from '../assist/get-path.js';

export async function deleteFile(comandTextArr){
    const dirPath = getPath(comandTextArr)
    try{
        await unlink(dirPath)
    }catch(err){
        throw new Error(err.message)
    }
};