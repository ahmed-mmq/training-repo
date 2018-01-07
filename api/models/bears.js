
const mongoose =  require('mongoose');

const bearSchema = mongoose.Schema({
    name: String 
});

module.exports = mongoose.model('Bear',bearSchema);