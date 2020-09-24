const { readFromDB, writeToDB } = require("../../db/utils.js");

module.exports = {
    findByEmailAndPassword: (data, callback) => {
        const records = readFromDB();
        const users = records.users;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === data.email && users[i].password === data.password) {
                return callback(null, data);
            }
        }
        return callback(null, null);
    }
}