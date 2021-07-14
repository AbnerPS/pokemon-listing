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
        });

        return response.json(!!create);
    },

    async list(request, response) {
        const users = await connection('at_users')
        .select("*");

        return response.json(users);
    },

    async login(request, response) {
        const { login, password } = request.body;
        const user = await connection('at_users')
        .where('login', login)
        .andWhere('password', password)
        .limit(1);

        if (user.length > 0) {
            try {
                const secret = process.env.SECRET;
                const payload = { id: user[0].id };
                const token = jwt.sign(payload, secret, { expiresIn: 86400 });
                const name = user[0].name;
                const image = user[0].image;
                return response.json({ name, image, token });
            } catch (error) {
                return response.status(401).end();
            }
            
        }

        response.status(401).end();
    },

    verify(request, response, next) {
        const token = request.headers.authorization;
        const secret = process.env.SECRET;
        jwt.verify(token, secret, (error, decoded) => {
            if (error) return response.status(401).end();
            request.id = decoded.id;
            next();
        });
    }
}