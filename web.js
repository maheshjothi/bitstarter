var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html', 'utf8', function (err, html) {
    if(err){
                console.log(err);
            }else{
                console.log(html);
            }
});
