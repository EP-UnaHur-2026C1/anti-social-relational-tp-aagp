const { Post } = require("../models")

const obtenerPosts = async (req,res) => {
    try {
        const posts = await Post.findAll({
            attributes: ["fecha", "texto"]
        })
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener todos los Posts."
        })
    }
}

const obtenerPost = (req,res) => {
    try {
        const { id } = req.params
        const post = req.post;
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({error: "Error al obtener el post."})
    }
} /* sin relaciones:
    try {
        const { id } = req.params
        const post = req.post;
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({error: "Error al obtener el post."})
    }
*/

const crearPost = async (req,res) => {
    try {
        const { texto } = req.body;
        const post = await Post.create({
            texto
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({
            error: error.message //error: "Error al crear el Post."
        });
    }
}

const actualizarPost = async (req,res) => {
    try {
        const { id } = req.params;
        const { texto } = req.body;
        const post = req.post;
        await post.update({
            texto
        });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({error: "Error al actualizar el Post."});
    }
}

const eliminarPost = async (req,res) => {
    try {
        const { id } = req.params;
        const post = req.post;
        await post.destroy();
        res.status(200).json({message: "Este post ha sido eliminado."});
    } catch (error) {
        res.status(500).json({error: "Error al eliminar el post."});
    }
}

module.exports = {
    obtenerPosts,
    obtenerPost,
    crearPost,
    actualizarPost,
    eliminarPost
}