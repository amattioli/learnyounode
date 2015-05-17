var http = require('http')
var fs = require('fs');

var serverPort = process.argv[2]
var location = process.argv[3]

function endsWithSlash(s) {
  return s.charAt(s.length - 1) === '/'
}
/*
if (endsWithSlash(location)) {
  location = location.substr(0,location.length - 1)
}
*/
console.log("Location: " + location)

var server = http.createServer(function(req,res) {
  console.log("Reading from " + location /*+ req.url*/)
  var readStream = fs.createReadStream(location/*+req.url*/)
  readStream.pipe(res)
})

server.listen(serverPort)
