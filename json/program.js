var http = require('http')
var url = require('url')

var serverPort = process.argv[2]

function parsetime(parsedUrl,res) {
  var d = new Date(parsedUrl.query.iso)
  var result = {
                 hour:   d.getHours(),
                 minute: d.getMinutes(),
                 second: d.getSeconds()
               }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  return res.end(JSON.stringify(result))
}

function unixtime(parsedUrl,res) {
  var d = new Date(parsedUrl.query.iso)
  var result = {
                 unixtime: d.getTime()
               }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  return res.end(JSON.stringify(result))
}

var server = http.createServer(function(req,res) {
  if (req.method != 'GET') {
    return res.end('Send me a GET\n')
  }
  var parsedUrl = url.parse(req.url,true)
  if (parsedUrl.pathname === '/api/parsetime') {
    return parsetime(parsedUrl,res)
  } else if (parsedUrl.pathname === '/api/unixtime') {
    return unixtime(parsedUrl,res)
  } else {
    return res.end("Unknown path")
  }
})

server.listen(serverPort)
