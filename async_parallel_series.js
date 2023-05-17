var async = require("async")

//redis
var redis =(callback)=>{
  setTimeout(()=>{
    return callback(null , "Redis done!")
  },500)

}
//mysql
var mysql =(callback)=>{
    setTimeout(()=>{
    return callback(null , "mysql done!")
},1500)
}

var jobs = [redis,mysql]
async.series(jobs,(err,res)=>{
//async.parallel(jobs,(err,res)=>{
if(err)returnconsole.error("Error:",err)
console.log(res)
})