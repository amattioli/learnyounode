var http = require('http')

var url = process.argv[2]

http.get(url,
         function(response) {
           var s = "";
           response.on("data", function(data) {
             s = s + data.toString();
           })
           response.on("end", function(data) {
             console.log(s.length)
             console.log(s)
           })
         })
