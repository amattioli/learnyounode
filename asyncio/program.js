var fs = require('fs');

fs.readFile(process.argv[2],
            function(err, buf) {
              var lines = buf.toString().split('\n');
              console.log(lines.length-1);
            })
