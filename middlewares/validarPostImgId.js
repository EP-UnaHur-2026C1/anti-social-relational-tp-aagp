const { PostImage, Post } = require('../models')

const validarPostImgId = async (req,res,next) =>{
    try {
        const {id} = req.params
        const postimage = await PostImage.findByPk(id, {
            attributes:["id","url","postId"],
            include:[
                {
                    model: Post,
                    as:"post",
                    attributes:["id","texto","fecha"]
                }
            ]
        })

        if(!postimage){
            return res.status(404).json({message: "PostImage no encontrado"})
        }

        req.postImage = postimage
        next()
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener el postImage"
        })
    }
}

module.exports = {
    validarPostImgId
}