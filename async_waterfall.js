var async =require ("async")
var fs = require("fs")
var file = "file1.txt";
var read = (callback)=>{
fs.readFile(file,callback)
}
var setEncoding =(data,callback)=>{
return callback(null , data.toString())
}
var jobs = [read,setEncoding];
async.waterfall(jobs,(err, res)=>{
   if(err)return console.error("Error:",err)
   console.log(res)
})