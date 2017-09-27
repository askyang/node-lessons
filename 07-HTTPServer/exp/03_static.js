'use strict';

const express = require('express');

let app = express();

app.use(express.static('public'));
app.use(express.static('files'));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
