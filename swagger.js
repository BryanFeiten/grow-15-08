const swaggerAutogen = require('swagger-autogen')();
const doc = require('./swagger.config');

const outputFile = './src/swagger-documentation.json';
const endPoints = [
    './src/routers/user.ts',
    './src/routers/auth.ts'
];

swaggerAutogen(outputFile, endPoints, doc);