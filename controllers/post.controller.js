const { Post, PostImage, Tag } = require("../models")

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



// IMAGENES
// al crear el post
const crearPostConImagen = async (req, res) => {
    try {
        const { texto, userId, url } = req.body;
        const post = await Post.create({
            texto,
            userId
        });
        const image = await PostImage.create({url})
        await post.addPostImage(image)
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({
            error: "Error al crear el Post."
        });
    }
}

// post ya creado
const agregarImagen = async (req, res) => {
    try {
        const { id } = req.params
        const post = req.post
        const { url } = req.body
        const image = await PostImage.create({url})
        await post.addPostImage(image)
        res.status(200).json({message: "Imagen agregada con éxito."})
    } catch (error) {
        res.status(500).json({error: "Error al agregar al post."})
    }
}



const eliminarImagen = async (req, res) => {
    try {
        const post = req.post
        const { imagenesId } = req.params
        const image = await PostImage.findByPk(imagenesId)
        await post.removePostImage(image)
        res.status(200).json({message: "Imagen eliminada del post con éxito."})
    } catch (error) {
        res.status(500).json({error:"Error al eliminar imagen del post."})
    }
}



const eliminarTodasLasImagenesDelPost = async (req, res) => {
    try {
        const post = req.post
        await post.removePostImages()
        res.status(200).json({message: "Todas las imágenes han sido eliminadas del post."})
    } catch (error) {
        res.status(500).json({error:"Error al eliminar todas las imágenes del post."})
    }
}


const obtenerImagenesDePost = async (req, res) => {
    try {
        const post = req.post
        const images = await post.getPostImages()
        res.status(200).json(images.map(i => i.url))
    } catch (error) {
        res.status(500).json({error: "Error al obtener las imágenes del post."})
    }
}

// TAGS
const asociarTag = async (req, res) => {}
const agregarTag = async (req, res) => {}

const eliminarTag = async (req, res) => {}

const obtenerTags = async (req, res) => {}



module.exports = {
    obtenerPosts,
    obtenerPost,
    crearPost,
    actualizarPost,
    eliminarPost,
    crearPostConImagen,
    agregarImagen,
    eliminarImagen,
    eliminarTodasLasImagenesDelPost,
    obtenerImagenesDePost
}