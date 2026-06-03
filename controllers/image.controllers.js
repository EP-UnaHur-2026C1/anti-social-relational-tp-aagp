const {PostImage, Post} = require('../models')

const crearPostImage = async(req,res) =>{
    try {
        const {url,post_id} = req.body
        const postImg = await PostImage.create({
            url,
            post_id
        })
        res.status(200).json(postImg)
    } catch (error) {
        res.status(500).json({
            error: "Error al crear postImage"
        })
    }
}
const obtenerPostsImage = async(req,res)=>{
    try {
        const postImg = await PostImage.findAll({
            attributes : ['url','post_id'],
            include:{
                model: Post,
                as: "post",
                attributes: ['texto','fecha']
            }
        })
        res.status(200).json(postImg)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
const actualizarPostImg = async (req,res) =>{
    try {
        const {id} = req.params;
        const {url} = req.body;
        const postImage = req.postImage;
        await postImage.update({
            url
        });
        res.status(200).json(postImage)
    } catch (error) {
        res.status(500).json({
            error: "Error al actualizar el postImage"
        })
    }
}
const eliminarPostImage = async(req,res) =>{
    try {
        const {id} = req.params;
        const postImage = req.postImage;
        await postImage.destroy(); 
        res.status(200).json({
            message: "PostImage eliminado correctamente",
        })
    } catch (error) {
        res.status(500).json({
            error: "Error al eliminar el postImage",
        });
    }
}
module.exports = {
    crearPostImage,
    eliminarPostImage,
    obtenerPostsImage,
    actualizarPostImg
}