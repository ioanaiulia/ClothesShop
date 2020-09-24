const { findByEmailAndPassword } = require("./service.js");

module.exports = {
    findByEmailAndPassword:(req, res) => {
        const body = req.body;
        findByEmailAndPassword(body, (err, result) => {
            return res.json(result);
        });
    }
}