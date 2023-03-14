const express = require('express')
const app = express()


app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/imagens', express.static(__dirname + '/imagens'))

app.listen(3000, function () {
    console.log('http://localhost:3000/');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
