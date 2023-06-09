var express = require('express')


const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
const endpoints = {
    etec: '/etec/etec.html',
    etec2: '/etec2/etec2.html',
    infs: '/infs/index.html',
    infs2: '/infs2/teste.html',
    infp: '/infp/infp.html',
    infp2: '/infp2/infp2.html',
    mkp: '/mkp/mkp.html',
    mkp2: '/mkp2/mkp2.html',
    teste: '/endpoints/teste.html'
}

const server = express()

server.listen(PORT, () => console.log(`Escutando em http://localhost:${PORT}`));

server.get('/', function(req,res){
    res.sendFile('base.html', { root: __dirname});
});

server.get('/nf-produto', function(req,res){
    res.sendFile("views/nf-produto.html", {root: __dirname });
});

server.get('/ht', (req,res) => res.sendFile(INDEX, { root: __dirname}));

server.get('/ETEC', (req, res) => res.sendFile(endpoints.etec, { root: __dirname}));
server.get('/ETEC2', (req, res) => res.sendFile(endpoints.etec2, { root: __dirname}));
server.get('/INFS', (req, res) => res.sendFile(endpoints.infs, { root: __dirname}));
server.get('/INFS2', (req, res) => res.sendFile(endpoints.infs2, { root: __dirname}));
server.get('/INFP', (req, res) => res.sendFile(endpoints.infp, { root: __dirname}));
server.get('/INFP2', (req, res) => res.sendFile(endpoints.infp2, { root: __dirname}));
server.use('/MKP', express.static('mkp'))
server.use('/MKP2', express.static('mkp2'))
server.get('/TESTE', (req, res) => res.sendFile(endpoints.teste, { root: __dirname}));
