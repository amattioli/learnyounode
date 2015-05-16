var ls = require('./mymodule')

var dirPath = process.argv[2];
var requestedExt = process.argv[3];

ls(dirPath, requestedExt,
   function(err, data) {
     for (var i=0; i<data.length; i++) {
       console.log(data[i])
     }
   })
