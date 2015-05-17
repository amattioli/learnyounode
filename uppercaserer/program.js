var http = require('http')
var map = require('through2-map')

var serverPort = process.argv[2]

var server = http.createServer(function(req,res) {
  if (req.method === 'POST') {
    req.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)
  } else {
    return res.end('Send me a POST\n')
  }
})

server.listen(serverPort)
