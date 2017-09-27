'use strict';

const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// error: post vs put => update vs add
// error: post vs put => add vs update

app.post('/', (req, res) => {
    res.send('Got a POST request');
});

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
});

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
