require('dotenv').config();

module.exports = {
    hello: function(req, res) {
        res.send({ express: 'Hello From Express' });
    },
    contactMe: function(req, res) {
        console.log("sfbwueh")
        const send = require("gmail-send")({
            user: 'ethanpersonalwebsite@gmail.com',
            pass: 'ejlzvojlpptsgfeh',
            to:   'ethanchristophertom@gmail.com',
            from: `${req.body.email}`,
            subject: `MESSAGE FROM ${req.body.name}: ${req.body.email} via website`,
        });

        send({
            text: `${req.body.message}`,
        }, (error, result) => {
            if (error) console.error(error);
            console.log(result);
        })
        res.send(`Thank you for reaching out to me ${req.body.name}. I will get back to you shortly`)
    },
}
