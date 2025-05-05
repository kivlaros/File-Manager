import { changeDir } from "./fs/change-dir.js";
import { list } from "./fs/list.js";
import {readFileStream} from "./fs/read-file.js"
import { create } from "./fs/create.js";
import { getPath } from "./assist/get-path.js";
import { compress } from "./zip/compress.js";
import { decompress } from "./zip/decompress.js";
import { calculateHash } from "./hash/hash.js";
import { osInfo } from "./os-info/os-info.js";
import { createDir } from "./fs/create-dir.js";
import { rename } from "./fs/rename.js";
import { copyMove } from "./fs/copy.js";
import { deleteFile } from "./fs/delete.js";

export default async function router(comandText){
    const errorMessage = 'Invalid input'
    const commandList = ['ls', 'cd', 'up', 'cat', 'add', 'rm', 'rn','cp','mv','.exit', 'os', 'hash', 'compress', 'decompress', 'mkdir'];
    const comandTextArr = comandText.split(' ')
    try{
        if(commandList.includes(comandTextArr[0])){
            switch(comandTextArr[0]){
                case 'ls':
                    await list()
                    break
                case 'cd':
                    changeDir(comandTextArr)
                    console.log(gray('the directory has been changed'))
                    break
                case 'up':
                    changeDir(comandTextArr)
                    console.log(gray('the directory has been changed'))
                    break
                case 'cat':
                    await readFileStream(comandTextArr)
                    console.log(gray('the reading is completed'))
                    break        
                case 'add':
                    await create(comandTextArr)
                    console.log(gray('a new file has been created'))
                    break  
                case 'compress':
                    await compress(comandTextArr)
                    console.log(gray('compress finished'))
                    break  
                case 'decompress':
                    await decompress(comandTextArr)
                    console.log(gray('decompress finished'))
                    break      
                case 'hash':
                    await calculateHash(comandTextArr)
                    console.log(gray('hash received'))
                    break
                case 'os':
                    osInfo(comandTextArr)
                    break
                case 'mkdir':
                    await createDir(comandTextArr)
                    console.log(gray('a new directory has been created'))
                    break        
                case 'rn':
                    await rename(comandTextArr)
                    console.log(gray('the file has been renamed'))
                    break
                case 'cp':
                    await copyMove(comandTextArr)
                    console.log(gray('the file is copied'))
                    break    
                case 'mv':
                    await copyMove(comandTextArr, true)
                    console.log(gray('the file has been moved'))
                    break
                case 'rm':
                    await deleteFile(comandTextArr)
                    console.log(gray('the file has been deleted'))
                    break       
            }
        }else{
            throw new Error(errorMessage)
        }
    }catch(err){
        if(err.message!=='Invalid input'){
            console.log('Operation failed')
        }else{
            console.log(err.message)
        }
    }finally{
        console.log( process.cwd())
    }
}

function gray(text) {
    return `\x1b[90m${text}\x1b[0m`;
}