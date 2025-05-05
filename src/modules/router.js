import { changeDir } from "./fs/change-dir.js";
import { list } from "./fs/list.js";
import {readFileStream} from "./fs/read-file.js"
import { create } from "./fs/create.js";
import { getPath } from "./assist/get-path.js";
import { compress } from "./zip/compress.js";
import { decompress } from "./zip/decompress.js";

export default async function router(comandText){
    const errorMessage = 'Invalid input'
    const commandList = ['ls', 'cd', 'up', 'cat', 'add', 'rm', 'rn','cp','mv','.exit', 'os', 'hash', 'compress', 'decompress', 'clear', 'test'];
    const comandTextArr = comandText.split(' ')
    if(commandList.includes(comandTextArr[0])){
        switch(comandTextArr[0]){
            case 'ls':
                await list()
                break
            case 'cd':
                changeDir(comandTextArr)
                console.log(comandTextArr[0])
                break
            case 'up':
                changeDir(comandTextArr)
                break
            case 'cat':
                await readFileStream(comandTextArr)
                break        
            case 'add':
                await create(comandTextArr)
                break
            case 'test':
                getPath(comandTextArr)
                break   
            case 'compress':
                await compress(comandTextArr)
                console.log('compress finished')
                break  
            case 'decompress':
                await decompress(comandTextArr)
                console.log('decompress finished')
                break      
        }
    }else{
        throw new Error(errorMessage)
    }
}