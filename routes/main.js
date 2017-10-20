var mongoose = require('mongoose'),
    Todo = mongoose.model('Todo');



module.exports = {
    index: function(req, res) {
        res.render('main', { title: 'Express Todo' });
    }
};