var fs = require('fs');
var path = require('path')

var dirPath = process.argv[2];
var requestedExt = '.' + process.argv[3];

fs.readdir(dirPath,
           function(err, list) {
             for (var i=0; i<list.length; i++) {
               if(path.extname(list[i]) == requestedExt) {
                 console.log(list[i]);
               }
             }
           })
