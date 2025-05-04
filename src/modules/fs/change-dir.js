import path from 'path';


export function changeDir(comandTextArr){
    const errorMessage = 'Invalid input'
    try{
        if(comandTextArr[0]=='up'){
            const parentDir = path.join(process.cwd(), '..');
            process.chdir(parentDir);
        }else{
            process.chdir(comandTextArr[1])
        }
    }catch(err){
        console.log(err.message)
        throw new Error(errorMessage)
    }
}
