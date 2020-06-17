let mongoose = require('mongoose');

mongoose.Promise = require('promise');
// Yes I know this is bad practice and I should use .env or something like that
// to store credentials but this is only for show
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