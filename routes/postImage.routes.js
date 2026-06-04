const {Router} = require('express')
const postImageControllers = require('../controllers/image.controllers')
const {validarPostImgId} = require('../middlewares/validarPostImgId')
const validarPostImg = require('../middlewares/validarPostImg')
const router = Router()

router.get('/',postImageControllers.obtenerPostsImage)
router.get('/:id',validarPostImgId,postImageControllers.obtenerPostImage)
router.post('/',validarPostImg,postImageControllers.crearPostImage)
router.delete('/:id',validarPostImgId,postImageControllers.eliminarPostImage)
router.put('/:id',validarPostImg,validarPostImgId,postImageControllers.actualizarPostImg)

module.exports = router;