const {PostImage, Post} = require('../models')

const crearImagen = async(req,res) =>{
    try {
        const {url,postId} = req.body
        const postImg = await PostImage.create({
            url,
            postId
        })
        res.status(200).json(postImg)
    } catch (error) {
        res.status(500).json({
            error: "Error al crear postImage"
        })
    }
}

const obtenerImagenes = async(req,res)=>{
    try {
        const postImg = await PostImage.findAll({
            attributes : ['id','url','postId'],
            include:{
                model: Post,
                as: "post",
                attributes: ['id','texto','fecha']
            }
        })
        res.status(200).json(postImg)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const obtenerUnaImagen = async(req,res)=>{
    const postImg = req.postImage;
    res.status(200).json(postImg)
}

const actualizarImagen = async (req,res) =>{
    try {
        const {id} = req.params;
        const {url} = req.body;
        const postImage = req.postImage;
        await postImage.update({
            url,
        });
        res.status(200).json(postImage)
    } catch (error) {
        res.status(500).json({
            error: "Error al actualizar la imagen"
        })
    }
}

const eliminarImagen = async(req,res) =>{
    try {
        const {id} = req.params;
        const postImage = req.postImage;
        await postImage.destroy(); 
        res.status(200).json({
            message: "Imagen  eliminada correctamente",
        })
    } catch (error) {
        res.status(500).json({
            error: "Error al eliminar la imagen",
        });
    }
}

module.exports = {
    crearImagen,
    eliminarImagen,
    obtenerImagenes,
    obtenerUnaImagen,
    actualizarImagen
}