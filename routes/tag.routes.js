const {Router} = require('express')
const tagControllers = require('../controllers/tag.controllers')
const {validarTagId} = require('../middlewares/validarTagId')
const router = Router()

router.get('/',tagControllers.obtenerTags)
router.post('/',tagControllers.crearTag)
router.delete('/:id',validarTagId,tagControllers.eliminarTag)
router.put('/:id',validarTagId,tagControllers.actualizarTag)

module.exports = router

