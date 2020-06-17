let mongoose = require('mongoose');

mongoose.Promise = require('promise');
mongoose.connect(
    'mongodb://acme-admin:acme-admin12@ds215633.mlab.com:15633/acme-database', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

let db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {mongoose};