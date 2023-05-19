 const http =require('http');
 const path=require('path');

const fs=require('fs');

 const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         fs.readFile(path.join(__dirname,'public','index.html'),(err,data)=>{
//             if(err) throw err;
//             res.writeHead(200,{'Content-Type': 'text/html'})
//             res.end(data)
//         })
//     }
//     if(req.url==='/about'){
//         fs.readFile(path.join(__dirname,'public','about.html'),(err,data)=>{
//             if(err) throw err;
//             res.writeHead(200,{'Content-Type':'text/html'});
//             res.end(data);
//         })
//     }

//     if(req.url==='/api/users'){
//         const users=[{
//             name:'Bob Marley',
//             age:35,
//             occupation:'Software Engineer'
//         },{
//             name:'John Doe',
//             age:33,
//             occupation:'Mechanical Engineer'
//         }];
//         res.writeHead(200,{'Content-Type':'application/json'});
//         res.end(JSON.stringify(users));
//     }
//Build file path
let filePath=path.join(__dirname,'public',req.url==='/' ? 'index.html' : req.url);
//find extention name
let extName=path.extname(filePath);
//set the initial content type
let contentType='text/html';
//check extention and set content type
switch(extName){
    case '.js': contentType='text/javascript';
    break;
    case '.html':contentType='text/html';
    break;
    case '.json':contentType='application/json';
    break;
    case '.css':contentType='text/css';
    break;
    case '.png':contentType='image/png';
    break;
    case '.jpg':contentType='image/jpg';
    break;
    default: contentType;
}
if (contentType == 'text/html' && extName == '') filePath += '.html';


//Read a file
fs.readFile(filePath,(err,content)=>{
    if(err){
        if(err.code=='ENOENT'){
            //Page not found
            fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                res.writeHead(404,{'Content-Type':'text/html'});
                res.end(content,'utf8')
            })
        }else{
            //server error
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
    }
    }else{
        //Success
        res.writeHead(200,{'Content-Type':contentType});
        res.end(content,'utf8')
    }
})

 });

 const PORT=process.env.PORT || 5000;

 server.listen(5000,()=>console.log(`Server running on port ${PORT}`))