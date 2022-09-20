const http =require("http")

const server =http.createServer((req,res)=>{
res.end("hell word")
})


server.listen(3000)