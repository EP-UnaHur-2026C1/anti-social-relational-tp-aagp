const {Router} = require('express')
const postImageControllers = require('../controllers/image.controllers')
const {validarPostImgId} = require('../middlewares/validarPostImgId')
const validarPostImg = require('../middlewares/validarPostImg')
const router = Router()


/**
 * @swagger
 * /postimage:
 *   get:
 *     summary: Obtener todos los postImages
 *     tags:
 *       - PostImages
 *     responses:
 *       200:
 *         description: Lista de postImages
 */
router.get('/',postImageControllers.obtenerPostsImage)
/**
 * @swagger
 * /postimage/{id}:
 *   get:
 *     summary: Obtener un postImage por ID
 *     tags:
 *       - PostImages
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: PostImage ID
 *     responses:
 *       200:
 *         description: Se encontro el postImage
 *       404:
 *         description: PostImg no encontrado
 */
router.get('/:id',validarPostImgId,postImageControllers.obtenerPostImage)
/**
 * @swagger
 * /postimage:
 *   post:
 *     summary: Crear un postImage
 *     tags:
 *       - PostImages
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
 *         description: PostImg creado con exito
 *       400:
 *         description: Error de validacion
 */
router.post('/',validarPostImg,postImageControllers.crearPostImage)
/**
 * @swagger
 * /postimage/{id}:
 *   delete:
 *     summary: Eliminar un tag
 *     tags:
 *       - PostImages
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del PostImage
 *     responses:
 *       200:
 *         description: PostImage eliminado correctamente
 *       404:
 *         description: PostImage no encontrado
 */
router.delete('/:id',validarPostImgId,postImageControllers.eliminarPostImage)
/**
 * @swagger
 * /postimage/{id}:
 *   put:
 *     summary: Actualizar un PostImage
 *     tags:
 *       - PostImages
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del PostImage
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
 *         description: PostImage actualizado con exito
 *       404:
 *         description: PostImage no encontrado
 */
router.put('/:id',validarPostImg,validarPostImgId,postImageControllers.actualizarPostImg)

module.exports = router;