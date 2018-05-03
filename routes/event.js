const mongoose = require('mongoose');
const Event = mongoose.model('event');

module.exports = (app) => {
    app.post('/api/add-event', (req, res) => {
        Event.create(req.body, (err, resp) => {
            Event.find({}).then(events => {
                res.json({
                    statusMsg: 'success',
                    listOfEvents: events
                })
            })
        })
    });

    app.get('/api/get-event', (req, res) => {
        Event.find({}).then(events => {
            res.json({
                statusMsg: false,
                listOfEvents: events
            })
        })
    });
}
