const Joi = require('joi');

const schemaPost = Joi.object({
    texto: Joi.string()
    .trim()
    .min(2)
    .max(500)
    .required()
    .messages({
        "string.base": "La descripción debe ser texto.",
        "string.empty":  "La descripción no debe ser vacía.",
        "string.min": "La descripción es muy corta.",
        "string.max": "La descripción es muy larga.",
        "any.required": "La descripción es obligatoria."
    }),
    userId: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
            "number.base": "El user debe ser un número.",
            "any.required": "El autor del post es obligatorio."
    }),
});

module.exports = schemaPost;