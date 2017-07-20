const express = require('express'),
    router = express.Router(),
    Subscription = require('./../models/subscription');

module.exports = (jwtCheck, adminCheck) => {
    // create subscription, ,
    router.post('/', (req, res) => {
        let subscription = new Subscription(req.body);
        if (subscription) {
            subscription.save((err, subscription) => {
                if (err)  return res.sendStatus(500);
                return res.send(subscription);
            });
        }
    });

    router.get('/:name', (req, res) => {
        if (typeof req.params.name !== 'undefined') {
            let name = req.params.name;
            Subscription.findOne({name: name}, (err, subscription) => {
                if (err) return res.sendStatus(500);
                return res.send(subscription);
            })
        }
    });
    return router;
};