const {Tag, Post} = require('../models')

const crearTag = async(req,res) =>{
    try {
        const {nombre} = req.body
        const tag = await  Tag.create({
            nombre
        })
        res.status(200).json(tag)
    } catch (error) {
        res.status(500).json({
            error: "Error al crear tag"
        })
    }
}
const obtenerTags = async (req,res)=>{
    try {
        const tags = await Tag.findAll({
            attributes : ['nombre'],
            include: {
                model: Post,
                as: "post",
                attributes: ['texto','fecha']
            }
        })
        res.status(200).json(tags)
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}
const actualizarTag = async (req,res) =>{
    try {
        const {id} = req.params;
        const{nombre} = req.body;
        const tag = req.tag;
        await tag.update({
            nombre
        })
        res.status(200).json(tag)
    } catch (error) {
        res.status(500).json({
            error: "Error al actualizar tag"
        })
    }
}
const eliminarTag = async(req,res) => {
    try {
        const {id} = req.params;
        const tag = req.tag;
        await tag.destroy();
        res.status(200).json({
            message: "Tag eliminado correctamente"
        })
    } catch (error) {
        res.status(500).json({
            error: "Error al eliminar el tag"
        })
    }
}
module.exports = {
    crearTag,
    obtenerTags,
    actualizarTag,
    eliminarTag
}