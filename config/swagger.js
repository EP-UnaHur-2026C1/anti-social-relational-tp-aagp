const swaggerDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Trabajo AAGP",
      version: "1.0.0",
      description: "Documentacion de la API"
    },
  },
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerDoc(options);


module.exports = swaggerSpec;