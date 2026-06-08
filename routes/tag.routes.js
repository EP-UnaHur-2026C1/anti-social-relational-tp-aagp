const {Router} = require('express')
const tagControllers = require('../controllers/tag.controllers')
const {validarTagId} = require('../middlewares/validarTagId')
const validarTag = require('../middlewares/validarTag')
const router = Router()

/**
 * @swagger
 * /tag:
 *   get:
 *     summary: Obtener todos los tags
 *     tags:
 *       - Tag
 *     responses:
 *       200:
 *         description: Lista de tags
 */
router.get('/',tagControllers.obtenerTags)
/**
 * @swagger
 * /tag/{id}:
 *   get:
 *     summary: Obtener un tag por ID
 *     tags:
 *       - Tag
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del tag
 *     responses:
 *       200:
 *         description: Se encontro el Tag
 *       404:
 *         description: Tag no encontrado
 */
router.get('/:id',validarTagId,tagControllers.obtenerTag)
/**
 * @swagger
 * /tag:
 *   post:
 *     summary: Crear un tag
 *     tags:
 *       - Tag
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tag creado con exito
 *       400:
 *         description: Error de validacion
 */
router.post('/',validarTag, tagControllers.crearTag) 
/**
 * @swagger
 * /tag/{id}:
 *   delete:
 *     summary: Eliminar un tag
 *     tags:
 *       - Tag
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del tag
 *     responses:
 *       200:
 *         description: Tag eliminado correctamente
 *       404:
 *         description: Tag no encontrado
 */
router.delete('/:id',validarTagId,tagControllers.eliminarTag)
/**
 * @swagger
 * /tag/{id}:
 *   put:
 *     summary: Actualizar un tag
 *     tags:
 *       - Tag
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del tag
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tag actualizado con exito
 *       404:
 *         description: Tag no encontrado
 */
router.put('/:id',validarTag,validarTagId,tagControllers.actualizarTag)

module.exports = router

