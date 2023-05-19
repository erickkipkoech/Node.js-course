const fs=require('fs');
const path=require('path');

//create folder
// fs.mkdir(path.join(__dirname,'/test'),{},err=>{
//     if(err) throw err;
//     console.log('Folder Created...');
// });

//create file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World',err=>{
//     if(err) throw err;
//     console.log('File created successfully')
//     //file append
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),' I love Node JS',err=>{
//         if(err) throw err;
//         console.log('File Appended successfully')
//     });
// });

//Read file
// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

//Rename  a file
fs.copyFile(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','new.txt'),err=>{
    if(err) throw err;
    console.log('Copied file');
})