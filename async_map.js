var async = require("async")
var fs = require("fs")

async.map(['file1.txt' ,'file2.txt','file3.txt'], fs.readFile , (err , results)=>{
    if(err) return console.error("error: " , err);
    console.log(results.toString())
})
