const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    desc : {
        type: String,
        require:true
    },
    fav : {
        type: Boolean,
        default:false
    }
});

module.exports = mongoose.model('TodoList',todoSchema);