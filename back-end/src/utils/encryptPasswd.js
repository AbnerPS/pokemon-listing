const crypto = require('crypto');

const encrypt = passwd => crypto.createHmac('sha512', process.env.SECRET)
.update(passwd)
.digest('hex');

module.exports = encrypt;