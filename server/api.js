const express = require('express'),
    router = express.Router();
const Subscription = require('./models/subscription');

module.exports = function (app) {
    router.get('/api', (req, res) => {
        res.send('API works');
    });

    /** Subscriptions...Had to put here cuz my routes wasn't working for some reason???
     *
     */
    router.post('/api/subscriptions', (req, res) => {
        let subscription = new Subscription(req.body);
        if (subscription) {
            subscription.name = subscription.name.toLowerCase();
            subscription.save((err, subscription) => {
                if (err)  return res.sendStatus(500);
                return res.send(subscription);
            });
        }
    });

    router.get('/api/subscriptions/name/:name', (req, res) => {
        if (typeof req.params.name !== 'undefined') {
            let name = req.params.name;
            Subscription.findOne({name: name.toLowerCase()}, (err, subscription) => {
                if (err) return res.sendStatus(500);
                return res.send(subscription);
            })
        }
    });

    router.get('/api/subscriptions/id/:id', (req, res) => {
        if (typeof req.params.id !== 'undefined') {
            let id = req.params.id;
            Subscription.findOne({registrationId: id}, (err, subscription) => {
                if (err) return res.sendStatus(500);
                return res.send(subscription);
            })
        }
    });

    router.use('/api', require('./routes'));

    return router;
};