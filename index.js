var express = require('express')
const { markupGet } = require('./markup2')
const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
const endpoints = {
    etec: 'etec/etec.html',
    etec2: 'etec2/etec2.html',
    infs: 'infs/infs.html',
    infs2: 'infs2/infs2.html',
    infp: 'infp/infp.html',
    infp2: 'infp2/infp2.html',
    mkp: 'mkp/mkp.html',
    mkp2: 'mkp2/mkp2.html',
    teste: 'endpoints/teste.html'
}

const server = express()

server.listen(PORT, () => console.log('Escutando em ${PORT}'));

server.get('/', function(req,res){
    res.sendFile(base.html);
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
server.get('/TESTE', (req, res) => res.sendFile(endpoints.teste));
server.get('/MKP2calc', markupGet)
