const mongoose = require('mongoose');

const BodyPartsSchema = new mongoose.Schema({
Head : [String]
});

module.exports = mongoose.model('Body Parts', BodyPartsSchema, 'Body Parts');