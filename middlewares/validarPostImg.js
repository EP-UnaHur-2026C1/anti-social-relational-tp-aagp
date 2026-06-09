const postimageSchema = require('../schemas/postImage.schema')

const validarPostImg = (req,res,next) => {
    const { error } = postimageSchema.validate(req.body)

    if (error) {
        return res.status(400).json({error: error.details[0].message})
    }

    next()
}

module.exports = validarPostImg