const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    organiser: {
        type: String,
        required: true
    },
    startdate: {
        type: Date
    },
    enddate: {
        type: Date
    }
});

mongoose.model('event', eventSchema);