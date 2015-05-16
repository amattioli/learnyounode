var fs = require('fs')
var path = require('path')

module.exports = function(dirPath, requestedExt, cb) {
  fs.readdir(dirPath,
             function(err, list) {
               if (err) {
                 return cb(err)
               }
               var result = new Array()
               for (var i=0; i<list.length; i++) {
                 if(path.extname(list[i]) === '.'+requestedExt) {
                   result.push(list[i])
                 }
               }
               cb(null,result)
             })
}
