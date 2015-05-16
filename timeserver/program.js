var net = require('net')

var port = process.argv[2]

function format2Digits(s) {
  if (s.toString().length < 2) {
    return '0' + s
  } else {
    return ''+s
  }
}

var server = net.createServer(function(socket) {
  var now = new Date();
  var nowString = "" + now.getFullYear() + "-"
                     + format2Digits(now.getMonth()+1) + "-"     // starts at 0
                     + format2Digits(now.getDate()) + " "      // returns the day of month
                     + format2Digits(now.getHours()) + ":"
                     + format2Digits(now.getMinutes()) + "\n"
  socket.end(nowString)
})

server.listen(port)
