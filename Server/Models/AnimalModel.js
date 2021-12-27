const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
Type : [String]
});

module.exports = mongoose.model('Animals', AnimalSchema, 'Animals');