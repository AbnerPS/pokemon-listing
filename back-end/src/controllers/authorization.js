const jwt = require('jsonwebtoken');
const connection = require('../database/connection');
const encrypt = require('../utils/encryptPasswd');

module.exports = {

    async register(request, response) {
        const { name, login, password, image } = request.body;

        const create = await connection('at_users').insert({
            name: name,
            login: login,
            password: encrypt(password),
            image: image
        })

        return response.json(!!create)
    },

    async list(request, response) {
        const users = await connection('at_users')
        .select("*");

        return response.json(users);
    },

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

    verify(request, response, next) { // pode ser usado um async - awat
        const token = request.headers.authorization;
        const secret = process.env.SECRET;
        jwt.verify(token, secret, (error, decoded) => {
            if (error) return response.status(401).end();
            request.id = decoded.id
            next();
        });
    }
}