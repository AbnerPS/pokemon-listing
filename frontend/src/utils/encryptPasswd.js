import crypto from 'crypto';

const secret = process.env.REACT_APP_SECRET;

const encrypt = (passwd) => crypto.createHmac('sha512', secret)
.update(passwd)
.digest('hex');

export default encrypt;