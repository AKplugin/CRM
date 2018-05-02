const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Staff = mongoose.model('staff');
const Teacher = mongoose.model('teacher');

module.exports = (app) => {
    app.post('/api/login', (req, res, next) => {
        Staff.findOne({
            useremail: 'admin@gmail.com'
        }).then(user => {
            const token = jwt.sign({
                useremail: 'admin@gmail.com'
            }, 'secret');
            res.json({ token });
        });
    });

    app.post('/api/add-teacher', (req, res, next) => {
        Teacher.create({
            name: req.body.name,
            qualification: req.body.qualification,
            email: req.body.email
        }, (error, resp) => {
            Teacher.find({}).then(resp => {
                return resp;
            }).then(resp => {
                res.json({
                    status: "success",
                    listOfStaffs: resp
                });
            });

        });
    });

    app.get('/api/get-teacher', (req, res) => {
        Teacher.find({}).then(resp => {
            return resp;
        }).then(resp => {
            res.json({
                listOfStaffs: resp
            });
        });
    });

    app.post('/api/get-teacher-details', (req, res) => {
        Teacher.findById(req.body.id)
            .then(teacher => res.json(teacher));
    });

    app.post('/api/remove-staff', (req, res) => {
        Teacher.findByIdAndRemove(req.body.id)
            .then(teacher => {
                Teacher.find({})
                    .then(teacher => {
                        res.json({ status: 'removed', listOfStaffs: teacher })
                    })
            });
    });
}
