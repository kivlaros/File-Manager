import { promises as fs } from 'fs'
import path from 'path';

export const create = async (comandTextArr) => {
    comandTextArr.shift()
    const filePath = path.join(process.cwd(),comandTextArr.join(' '))
    try{
        await fs.writeFile(filePath,'','utf8')
    }catch(err){
        throw new Error(err.message)
    }
};