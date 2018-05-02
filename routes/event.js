const mongoose = require('mongoose');
const Teacher = mongoose.model('event');

module.exports = (app) => {
    app.post('/api/add-event', (req, res) => {
        console.log(req.body)
    });
}
