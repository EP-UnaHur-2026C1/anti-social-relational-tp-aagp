const { Router } = require('express')
const tagControllers = require('../controllers/tag.controllers')
const { validarTagId } = require('../middlewares/validarTagId')
const validarTag = require('../middlewares/validarTag')
const router = Router()

router.get('/', tagControllers.obtenerTags)
router.get('/:id', validarTagId, tagControllers.obtenerTag)
router.post('/', validarTag, tagControllers.crearTag) 
router.delete('/:id', validarTagId, tagControllers.eliminarTag)
router.put('/:id', validarTag, validarTagId, tagControllers.actualizarTag)

module.exports = router

