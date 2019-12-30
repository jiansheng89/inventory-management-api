var mongoose = require('mongoose');
var host = require('./host');
var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

mongoose.Promise = global.Promise;
mongoose.connect(host.serverHost.mongodb, options);
var db = mongoose.connection;

db.on('connected', function () {
    console.log("MongoDB connected.")
});

db.on('error', function () {
    console.log("MongoDB Connection Failed.")
});

db.on('disconnected', function () {
    console.log("MongoDB Disconnected.")
});

//if connection ok?
db.once('open', function dbOpen() {
});

exports.mongoose = mongoose;