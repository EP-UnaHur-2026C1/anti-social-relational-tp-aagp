const YAML = require('yamljs')
const swaggerDoc = YAML.load('./docs/swagger.yaml')

module.exports = swaggerDoc;