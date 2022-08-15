const { User } = require('./documentation/User');

module.exports = {
    info: {
        version: '1.0.0',
        title: 'API Exemplo JWT + Swagger',
        description: 'Descrição da API...'
    },
    host: 'localhost:8080',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    secutiryDefinitions: {
        JWT: {
            description: 'JWT Token',
            type: 'apiKey',
            in: 'header',
            name: 'Authorization'
        }
    },
    definitions: {
        User,
        UserList: [
            { $ref: '#/definitions/User' }
        ]
    }
};