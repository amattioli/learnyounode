var http = require('http')

var urls = [ process.argv[2], process.argv[3], process.argv[4] ]
var results = []
var count = 0

function retrieve(url, index) {
  http.get(url,
           function(response) {
             var s = "";
             response.on("data", function(data) {
               s = s + data.toString();
             })
             response.on("end", function(data) {
               results[index] = s;
               //console.log("Index "+index)
               if (++count == urls.length) {
                 results.forEach(function(element) { console.log(element) });
               }
             })
           })
}

retrieve(urls[0],0);
retrieve(urls[1],1);
retrieve(urls[2],2);
