var express = require('express')
const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
const endpoints = {
    etec: 'endpoints/etec.html',
    etec2: 'endpoints/etec2.html',
    infs: 'endpoints/infs.html',
    infs2: 'endpoints/infs2.html',
    infp: 'endpoints/infp.html',
    infp2: 'endpoints/infp2.html',
    mkp: 'endpoints/mkp.html',
    mkp2: 'endpoints/mkp2.html'
}

const server = express()

server.listen(PORT, () => console.log('Escutando em ${PORT}'));

server.get('/', function(req,res){
    res.send("Site de tecnologia 1");
});

server.get('/ht', (req,res) => res.sendFile(INDEX, { root: __dirname}));

server.get('/ETEC', (req, res) => res.sendFile(endpoints.etec));
server.get('/ETEC2', (req, res) => res.sendFile(endpoints.etec2));
server.get('/INFS', (req, res) => res.sendFile(endpoints.infs));
server.get('/INFS2', (req, res) => res.sendFile(endpoints.infs2));
server.get('/INFP', (req, res) => res.sendFile(endpoints.infp));
server.get('/INFP2', (req, res) => res.sendFile(endpoints.infp2));
server.get('/MKP', (req, res) => res.sendFile(endpoints.mkp));
server.get('/MKP2', (req, res) => res.sendFile(endpoints.mkp2));

const multi = require('./multiply')
console.log(multi.multiply('3,4'));