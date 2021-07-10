const axios = require('axios');
const api = process.env.API;

module.exports = {
    list(request, response) {
        const page = request.query.page;
        axios.get(`${api}?offset=${page}`).then(({data}) => response.json(data));
    },

    search(request, response) {
        const name = request.query.name;
        axios.get(`${api}?limit=1118`).then(({data}) => response.json(data.results.filter(element => element.name.includes(name))));
    },
    
    details(request, response) {
        const url = request.query.url;
        axios.get(url).then(({data}) => response.json(data));
    },
}
