const { Tag, Post }  = require('../models') 

const validarTagId = async (req,res,next) =>{
    try {
        const { id } = req.params;
        const tag =  await Tag.findByPk(id, {
            attributes:["id","nombre"],
            include:[
                {
                    model: Post,
                    as:"posts",
                    attributes:["id","texto","fecha"],
                    through:{
                        attributes:[]
                    }
                }
            ]
        })

        if(!tag){
            return res.status(400).json({message: "Tag no encontrado"})
        }
        
        req.tag = tag
        next()
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener el tag"
        })
    }
}

module.exports = {
    validarTagId
}