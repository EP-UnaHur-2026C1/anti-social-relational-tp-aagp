const {Postimage} = require('../models')

const validarPostImgId = async (req,res,next) =>{
    try {
        const {id} = req.params
        const postimage = await Postimage.findByPk(id)
        if(!postimage){
            return res.status(404).json({message: "PostImage no encontrado"})
        }
        req.postImage = postimage
        next()
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener el producto"
        })
    }
}
module.exports = {
    validarPostImgId
}