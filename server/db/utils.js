module.exports = {
    readFromDB: function() {
        const fs = require('fs');
        var records = fs.readFileSync("./db/db.json");
        records = JSON.parse(records);
        return records;
    },
    writeToDB: function(records) {
        const fs = require('fs');
        fs.writeFile('./db/db.json', records, (callBack) => {
            //nothing
        });
    }
}