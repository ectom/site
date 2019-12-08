module.exports = {
    hello: function(req, res) {
        res.send({ express: 'Hello From Express' });
    },
    contactMe: function(req, res) {
        const send = require("gmail-send")({
            user: 'ethanpersonalwebsite@gmail.com',
            pass: 'xJy24o81!a2efr?nmbGE',
            to:   'ethanchristophertom@gmail.com',
            subject: 'test subject',
        });

        directmail.send({
            from: `${req.body.email}`,
            recipients: ['ethanchristophertom@gmail.com'],
            message: `MESSAGE FROM ${req.body.name} via website\r\n\r\n${req.body.message}`
        });
        res.send(`Thank you for reaching out to me ${req.body.name}. I will get back to you shortly`)
    },
}
