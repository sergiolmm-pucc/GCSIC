var express = require('express')
const { markupGet } = require('./markup2')
const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()

server.listen(PORT, () => console.log('Escutando em ${PORT}'));

server.get('/', function(req,res){
    res.send("Site de tecnologia 1");
});

server.get('/ht', (req,res) => res.sendFile(INDEX, { root: __dirname}));

server.get('/MKP2', markupGet)

const multi = require('./multiply')
console.log(multi.multiply('3,4'));