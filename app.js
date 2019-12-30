global.__base = __dirname + '/';

var restify = require('restify');
var corsMiddleware = require("restify-cors-middleware");  

process.env.UV_THREADPOOL_SIZE = 128;


// Setup some https server options
var serverOptions = {
    name: 'Inventory Management API', //Server Name
    version: '1.0.0'
}

//create restify server
var app = restify.createServer(serverOptions);
app.use(restify.plugins.fullResponse());
app.use(restify.plugins.bodyParser({
    extended: true
}));
app.use(restify.plugins.queryParser());


const cors = corsMiddleware({  
    origins: ["*"],
    allowHeaders: ["Authorization"],
    exposeHeaders: ["Authorization"]
});

app.pre(cors.preflight);  
app.use(cors.actual);  

//Add header for exception
app.use(function (req, res, next) {
    if (req.method === "OPTIONS") {
        console.log("option")
        return res.status(200).end();
    }
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,DELETE,POST,OPTIONS")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Cache-control", "no-store")
    res.setHeader("Pragma", "no-cache")
    
    next()
})

//Expose public folder
app.get(/\/public\/?.*/, restify.plugins.serveStatic({
   'directory': __dirname
}));


var port = (typeof process.env.LISTEN_PORT == 'undefined') ? 4000 : process.env.LISTEN_PORT;
//start server
app.listen(port, function () {
    console.log("Server is listening to Port ", port);
});

//define the routes @ page content
var routes = require('./routes')(app);
