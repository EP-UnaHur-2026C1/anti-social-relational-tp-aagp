const {Router} = require('express')
const postImageControllers = require('../controllers/image.controllers')
const {validarPostImgId} = require('../middlewares/validarPostImgId')
const validarPostImg = require('../middlewares/validarPostImg')
const router = Router()

router.get('/',postImageControllers.obtenerImagenes)
router.get('/:id',validarPostImgId,postImageControllers.obtenerUnaImagen)
router.post('/',validarPostImg,postImageControllers.crearImagen)
router.delete('/:id',validarPostImgId,postImageControllers.eliminarImagen)
router.put('/:id',validarPostImg,validarPostImgId,postImageControllers.actualizarImagen)

module.exports = router;