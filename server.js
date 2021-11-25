const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/chapter-3', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/chapter-3/index.html'));
});
app.get('/chapter-4', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/chapter-4/index.html'));
});


app.listen(port);
console.log('Server started at http://localhost:' + port);