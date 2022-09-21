const http =require("http")

const server=http.createServer((req,res)=>{
    res.end(" yyds llll")
})

server.listen(4000)