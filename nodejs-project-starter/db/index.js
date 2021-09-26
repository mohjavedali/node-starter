const mongoose = require('mongoose'),
    dbconf = require('../config/db');

let dbString = 'mongodb://localhost:27017/temp001';
// let dbString = 'mongodb://' + dbconf.dbcredentials.user;
// dbString = dbString + ':' + dbconf.dbcredentials.password;
// dbString = dbString + '@' + dbconf.dbcredentials.address;
// dbString = dbString + ':' + dbconf.dbcredentials.port;
// dbString = dbString + '/' + dbconf.dbcredentials.database;

mongoose.connect(dbString, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
module.exports = {
    User: require('./models/user'),
    Address: require('./models/Address'),
    Book: require('./models/Book'),
    Author: require('./models/Author'),
    Record: require('./models/Record')
};