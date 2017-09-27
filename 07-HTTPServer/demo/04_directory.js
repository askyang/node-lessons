'use strict';

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const handlebars = require('handlebars');

let server = http.createServer(function(req, res){
    let pathName = url.parse(req.url).pathname,
        realPath = path.join(__dirname, pathName);

    fs.stat(realPath, (err, stats) => {
        if(err){ // file or forder do not exists
            res.writeHead(404, {
                'content-type':'text/html'
            });
            let source = fs.readFileSync('./template/404.tmpl'),
                template = handlebars.compile(source.toString()),
                data = {
                    path: url.parse(req.url).pathname
                };

            res.end(template(data));
            // res.write(template(data));
            // res.end();

            // let path = url.parse(req.url).pathname;
            //
            // res.end(`<!DOCTYPE html>
            // <html lang="en">
            // <head>
            //     <meta charset="UTF-8">
            //     <title>404</title>
            //     <style>
            //         body{
            //             width: 990px;
            //             margin: 100px auto;
            //         }
            //
            //         span{
            //             color: red;
            //             font-weight: bold;
            //         }
            //     </style>
            // </head>
            // <body>
            //     file <span>${path}</span> do not exists;
            // </body>
            // </html>`);
        }else{
            if(stats.isDirectory()){
                let source = fs.readFileSync('./template/directory.tmpl'),
                    template = handlebars.compile(source.toString()),
                    data = {
                        title: url.parse(req.url).name,
                        path: path.join(pathName, '/'),
                        files: []
                    };

                data.files = fs.readdirSync(realPath);
                res.end(template(data));

                // fs.readdir(realPath, (err, files) => {
                //     data.files = files;
                //     res.end(template(data));
                // });
            }else{
                fs.createReadStream(realPath).pipe(res);
            }
        }
    });

});

server.listen(process.argv[2] || 9000);
