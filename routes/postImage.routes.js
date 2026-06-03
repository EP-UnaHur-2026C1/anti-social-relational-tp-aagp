const {Router} = require('express')
const postImageControllers = require('../controllers/image.controllers')
const {validarPostImgId} = require('../middlewares/validarPostImgId')
const router = Router()

router.get('/',postImageControllers.obtenerPostsImage)
router.post('/',postImageControllers.crearPostImage)
router.delete('/:id',validarPostImgId,postImageControllers.eliminarPostImage)
router.put('/:id',validarPostImgId,postImageControllers.actualizarPostImg)

module.exports = router;