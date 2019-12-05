var mongoose = require('mongoose');

var pageSchema  = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    link: {
        type: String
    },
    content: {
        type: String,
        require: true
    },
    sorting: {
        type: Number
    },
})

var page = module.exports = mongoose.model('pages', pageShema);