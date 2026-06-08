const { User } = require("../models");

const validarUserComentario = async (req, res, next) => {
    try {
        const { userId } = req.body;
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({
                error: "Usuario no encontrado"
            })
        }

        req.user = user;
        next();

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

module.exports = validarUserComentario;