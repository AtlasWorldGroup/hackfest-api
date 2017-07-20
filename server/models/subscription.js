const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const schema = new mongoose.Schema({
    registrationId: {type: String},
    name: {type: String}
});

module.exports = mongoose.model('subscription', schema);