const { Post } = require("../models");

const validarPostComentario = async (req, res, next) => {
    try {
        const { postId } = req.body;
        const post = await Post.findByPk(postId);

        if (!post) {
            return res.status(404).json({
                error: "Post no encontrado"
            })
        }

        req.post = post;
        next();

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

module.exports = validarPostComentario;