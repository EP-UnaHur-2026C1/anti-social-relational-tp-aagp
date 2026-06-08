const { Router } = require("express");
const commentController = require("../controllers/comment.controllers");
const validarComentario = require("../middlewares/validarComentario");
const validarComentarioId = require("../middlewares/validarComentarioId");
//const validarUserComentario = require("../middlewares/validarUserComentario");
//const validarPostComentario = require("../middlewares/validarPostComentario");
const router = Router();


/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Obtener todos los comments
 *     tags:
 *       - Comments
 *     responses:
 *       200:
 *         description: Lista de comments
 */
router.get("/", commentController.obtenerComentarios)
/**
 * @swagger
 * /comments/{id}:
 *   get:
 *     summary: Obtener un comment por ID
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del comment
 *     responses:
 *       200:
 *         description: Se encontro el comment
 *       404:
 *         description: comment no encontrado
 */
router.get("/:id", validarComentarioId,commentController.obtenerComentario)
/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Crear un comment
 *     tags:
 *       - Comments
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
 *         description: comment creado con exito
 *       400:
 *         description: Error de validacion
 */
router.post("/", /*validarUserComentario, validarPostComentario,*/ validarComentario, commentController.crearComentario)
/**
 * @swagger
 * /comments/{id}:
 *   put:
 *     summary: Actualizar un comment
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del comment
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
 *         description: comment actualizado con exito
 *       404:
 *         description: comment no encontrado
 */
router.put("/:id", validarComentarioId, validarComentario, commentController.actualizarComentario)
/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     summary: Eliminar un comment
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del comment
 *     responses:
 *       200:
 *         description: comment eliminado correctamente
 *       404:
 *         description: comment no encontrado
 */
router.delete("/:id", validarComentarioId, commentController.eliminarComentario)

module.exports = router;