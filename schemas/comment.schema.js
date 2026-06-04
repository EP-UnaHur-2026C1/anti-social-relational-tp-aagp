const Joi = require("joi");

const commentSchema = Joi.object({
    content: Joi.string()
        .required()
        .messages({
            "string.empty": "El comentario no puede estar vacío",
            "any.required": "El comentario no puede estar vacío"
        })
});

module.exports = commentSchema;