const { Comment } = require("../models");

const validarComentarioId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const comentario = await Comment.findByPk(id);

        if (!comentario) {
            return res.status(404).json({
                error: "Comentario no encontrado"
            });
        }

        req.comment = comentario;
        next();

    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

module.exports = validarComentarioId;