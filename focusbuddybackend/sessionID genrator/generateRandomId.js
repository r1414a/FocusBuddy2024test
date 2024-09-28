const crypto = require('crypto');

function generateRandomId() {
    //Generate a random string
    const sid = crypto.randomUUID()
    // console.log("sessionID generated from function: ",sid);
    return sid;

}


module.exports = generateRandomId;