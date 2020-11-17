const express = require('express');
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'First API docs',
            description: 'The description of people and messages',
            contacts: {
                name: 'Artem Eremchuk',
                email: 'eremchuk.it@gmail.com'
            },
            servers: ['http://localhost:3000'],
            version: '1.0.0'
        }
    },
    apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const routes = require('./routes/index');
app.use('/', routes);

app.listen(port, () => {
    console.log('Server running...');
});