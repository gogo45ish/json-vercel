const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();

// Configure CORS to allow any origin dynamically
const corsOptions = {
  origin: true, // Allows all origins
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

server.use(cors(corsOptions));

const middlewares = jsonServer.defaults();
server.use(middlewares);

server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}));

const router = jsonServer.router('db.json');
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running');
});

module.exports = server;
