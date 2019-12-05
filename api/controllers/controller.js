// var mongoose = require('mongoose')
// var Poll = mongoose.model('Poll');

module.exports = {
    hello: function(req, res) {
        res.send({ express: 'Hello From Express' });
    },
    world: function(req, res) {
        console.log(req.body);
        res.send(
            `I received your POST request. This is what you sent me: ${req.body.post}`,
        );
    },
    // getAll: function(req, res) {
    //     Poll.find({})
    //         .then(poll => {
    //             res.json(poll);
    //         })
    //         .catch(errors => {
    //             res.status(500).json(errors)
    //         })
    // },
    // createPoll: function(req, res) {
    //     const poll = new Poll(req.body);
    //     poll.save()
    //         .then( () => {
    //             console.log('successfully created poll');
    //             res.json(true);
    //         })
    //         .catch(errors => res.status(500).json(errors))
    // },
    // getOne: function(req, res) {
    //     console.log('id HERE')
    //     Poll.findOne({_id: req.params.id})
    //         .then(poll => {
    //             res.json(poll);
    //         })
    //         .catch(errors => {
    //             res.status(500).json(errors);
    //         })
    // },
}
