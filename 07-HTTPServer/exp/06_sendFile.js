'use strict';

const express = require('express');

let app = express();

app.get('/file/:name', (req, res, next) => {
    let options = {
        root: __dirname + '/files/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    let fileName = req.params.name;

    res.sendFile(fileName, options, (err) => {
        if(err){
            console.log(err);
            res.sendStatus(err.status).end();
        }else{
            console.log('sent', fileName);
        }
    });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
