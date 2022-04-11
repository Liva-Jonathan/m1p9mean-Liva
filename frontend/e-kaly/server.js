const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/e-kaly'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/e-kaly/index.html'));
});

app.listen(process.env.PORT);