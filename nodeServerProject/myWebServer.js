//. Inside of your myWebServer module, create a web server which listens to requests on port 1234
const http = require("http")
const serverA = http.createServer((req, res) =>{

console.log("request recived")
res.end("request received &  processed")
})

serverA.listen(1234 ,function (){
  console.log("server is running")
})

//7Q
const http = require("http");
const randemnum = require("./randemNumber.js")
const server1 = http.createServer((req, res) => {
    console.log("request recived");
    const num = randemnum.random();
    res.end( `Randem number ${num}`)
})
server1.listen(1234, function () {
  console.log("server is running on ");
});
//8Q
const http = require("http");
const fs = require("fs")
const path = require("path");
const server = http.createServer((req, res) => {
  let filepath = req.url
  if(filepath === "/"){
    filepath = "/index.html";
  }
  let requstedfile = path.join(__dirname,"static","apple html css replica",filepath)
  fs.readFile(requstedfile, (err, cotent) => {
    if (err) {
      res.writeHead(500, { "conten-type": "text/plain" });
      res.end("server error");
    }
    res.end(cotent);
  });
}
);
server.listen(1234,() => {
    console.log("server running on the port 1234 " )
})


