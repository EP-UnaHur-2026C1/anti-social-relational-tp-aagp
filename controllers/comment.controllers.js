const { Comment, User } = require("../models");
const { Op } = require("sequelize");

const obtenerComentarios = async (req,res) => {
    try {
        const comentarios = await Comment.findAll({
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["id", "nickname"]
                }
            ]    
        });

        res.status(200).json(comentarios);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

const obtenerComentario = async (req,res) => {
    const comentario = req.comment;
    res.status(200).json(comentario);
}

const obtenerComentariosPorPost = async (req,res) => {
    try {
        const visibleMonths = Number(process.env.COMMENT_VISIBLE_MONTHS) || 6;
        const fechaLimite = new Date();

        fechaLimite.setMonth(
            fechaLimite.getMonth() - visibleMonths
        );

        const comentarios = await Comment.findAll({
            where: {
                postId: req.params.postId,
                visible: true,
                createdAt: {
                    [Op.gte]: fechaLimite,
                }
            }
        });

        res.status(200).json(comentarios);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

const crearComentario = async (req,res) => {
    try {
        const { content, userId, postId } = req.body;
        const comentario = await Comment.create({
            content,
            userId,
            postId
        });

        res.status(201).json(comentario);

    } catch (error) {
        res.status(500).json({
            error: "Error al crear el comentario",
        });
    }
}

const actualizarComentario = async (req,res) => {
    try {
        const comentario = req.comment;
        const { content } = req.body;
        
        await comentario.update({
            content,
        });

        res.status(200).json(comentario);

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

const eliminarComentario = async (req,res) => {
    try {
        const comentario = req.comment;

        await comentario.destroy();

        res.status(200).json({
            message: "Comentario eliminado correctamente",
        });

    } catch (error) {
        res.status(500).json({
            error: "Error al eliminar el comentario",
        });
    }
}

module.exports = {
    obtenerComentarios,
    obtenerComentario,
    obtenerComentariosPorPost,
    crearComentario,
    actualizarComentario,
    eliminarComentario
}