const schemaPostTags = require("../schemas/postTag.schema");

const validarPostTags = (req,res,next) => {
    const { error } = schemaPostTags.validate(req.body);

    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        });
    }

    next();
};

module.exports = validarPostTags;