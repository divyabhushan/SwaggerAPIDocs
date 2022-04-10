const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const { router } = require("./routes/app.routes");

const app = express ();
const port = 5000;

const options = {
    swaggerDefinition: {
        openapi: '3.0.1',
    schemes: [
        'https',
        'http'
    ],
    paths: {
        '/pet': {
            'post': {
                'tags': [
                    'pet'
                ],
                'summary': 'Add a new pet'
            },
        },
    },
    },
    apis: ["./routes/*.js"],
};

const swaggerSpecs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use("/api", router);

app.get('/', (req, res) => {
    //res.sendFile('index.html', {root: __dirname});
    res.send("Generating SwaggerAPI documentation");
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
