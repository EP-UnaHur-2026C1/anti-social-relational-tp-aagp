const { Post, PostImage, Tag } = require("../models")

const obtenerPosts = async (req,res) => {
    try {
        const posts = await Post.findAll({
            attributes: ["fecha", "texto", "userId"],
            include: [
                {
                    model: PostImage,
                    as: "images",
                    attributes: ["url"]
                },
                {
                    model: Tag,
                    as: "tags",
                    attributes: ["id", "nombre"],
                    through: {
                        attributes: []
                    }
                }
            ]
        })
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener todos los Posts."
        })
    }
}

const obtenerPost = (req,res) => {
        const { id } = req.params
        const post = req.post;
        res.status(200).json(post);
}

const crearPost = async (req,res) => {
    try {
        const { texto, userId } = req.body;
        const post = await Post.create({
            texto,
            userId
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({
            error: "Error al crear el Post."
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


// TAGS
const agregarTagsAPost = async (req, res) => {
    try {
        const post = req.post
        const { tagsIds } = req.body
        const tags = await Tag.findAll({
            where: {
                id: tagsIds
            }
        })
        await post.setTags(tags);
        res.status(200).json({ message: "Tags agregados con éxito."})
    } catch (error) {
        res.status(500).json({ error: "Error al agregar los tags."})
    }
}


const agregarUnTagAPost = async (req, res) => {
    try {
        const post = req.post
        const { tagId } = req.params
        const tag = await Tag.findByPk(tagId)
        await post.addTag(tag)
        res.status(200).json({message:"Tag asociado con éxito."})
    } catch (error) {
        res.status(500).json({error: "Error al asociar el Tag con el Post."})
    }
}

const quitarTagDePost = async (req, res) => {
    try {
        const post = req.post
        const { tagId } = req.params
        const tag = await Tag.findByPk(tagId)
        await post.removeTag(tag)
        res.status(200).json({message:"Se quitó el Tag del Post."})
    } catch (error) {
        res.status(500).json({error:"No fue posible quitar el Tag del Post."})
    }
}

const quitarTodosLosTagsDePost = async (req, res) => {
    try {
        const post = req.post
        const { tagsIds } = req.body
        const tags = await Tag.findAll({
            where: {
                id: tagsIds
            }
        })
        await post.removeTags(tags)
        res.status(200).json({message:"Se quitaron todos los Tags del Post."})
    } catch (error) {
        res.status(500).json({error:"No fue posible quitar todos los Tags del Post."})
    }
}


module.exports = {
    obtenerPosts,
    obtenerPost,
    crearPost,
    actualizarPost,
    eliminarPost,
    agregarTagsAPost,
    agregarUnTagAPost,
    quitarTagDePost,
    quitarTodosLosTagsDePost
}