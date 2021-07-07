const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

    login(request, response) {
        const login = request.body.login;
        const passwd = request.body.passwd;

        if (login === 'Abner' && passwd === '123') {
            const secret = process.env.SECRET;
            const payload = { id: 1 };
            const token = jwt.sign(payload, secret, { expiresIn: 300 });
            return response.json({ auth: true, token: token });
        }

        response.status(401).end();
    },

    verify(request, response, next) { // pode ser usado um asyn - awat
        const token = request.headers.authorization;
        const secret = process.env.SECRET;
        jwt.verify(token, secret, (error, decoded) => {
            if (error) return response.status(401).end();
            request.id = decoded.id
            next();
        });
    }
}