const url=require('url');

const myUrl=new URL('http://mywebsite:3000/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Get the domain(host domain)
console.log(myUrl.host);

//Host naame
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Object params
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value,name)=>{console.log(`${value}:${name}`)});