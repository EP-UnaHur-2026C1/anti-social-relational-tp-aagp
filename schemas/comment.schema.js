const Joi = require("joi");

const commentSchema = Joi.object({
    content: Joi.string()
        .trim()
        .min(1)
        .max(500)
        .required()
        .messages({
            "string.base": "El comentario debe ser texto",
            "string.empty": "El comentario no puede estar vacío",
            "string.min": "El comentario no puede estar vacío",
            "string.max": "El comentario no puede superar los 500 caracteres",
            "any.required": "El comentario es obligatorio"
        }),
    userId: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            "number.base": "El id del usuario debe ser un número",
            "number.integer": "El id del usuario debe ser un número entero",
            "number.positive": "El id del usuario debe ser mayor a 0",
            "any.required": "El id del usuario es obligatorio"
        }),
    postId: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            "number.base": "El id del post debe ser un número",
            "number.integer": "El id del post debe ser un número entero",
            "number.positive": "El id del post debe ser mayor a 0",
            "any.required": "El id del post es obligatorio"
        })
});

module.exports = commentSchema;