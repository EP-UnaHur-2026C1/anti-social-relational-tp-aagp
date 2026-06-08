const { Router } = require("express");
const postsController = require("../controllers/post.controller");
const validarPost = require('../middlewares/validarPost');
const { validarPostIdConUser, validarPostId } = require('../middlewares/validarPostId');
const { validarTagId } = require('../middlewares/validarTagId')
const validarTag = require('../middlewares/validarTag')
const router = Router();

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Obtener todos los posts
 *     tags:
 *       - Posts
 *     responses:
 *       200:
 *         description: Lista de posts
 */
router.get("/", postsController.obtenerPosts);
/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Obtener un post por ID
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del post
 *     responses:
 *       200:
 *         description: Se encontro el post
 *       404:
 *         description: post no encontrado
 */
router.get("/:id", validarPostIdConUser, postsController.obtenerPost);
/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Crear un posts
 *     tags:
 *       - Posts
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
 *         description: post creado con exito
 *       400:
 *         description: Error de validacion
 */

router.post("/", validarPost, postsController.crearPost);
/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Actualizar un post
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del post
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
 *         description: post actualizado con exito
 *       404:
 *         description: post no encontrado
 */
router.put("/:id", validarPostId, validarPost, postsController.actualizarPost);
/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Eliminar un post
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del post
 *     responses:
 *       200:
 *         description: post eliminado correctamente
 *       404:
 *         description: post no encontrado
 */
router.delete("/:id", validarPostId, postsController.eliminarPost);


// tags
router.patch("/:id/tags", validarPostId, validarTag, postsController.agregarTagsAPost)
router.patch("/:id/tags/:tagId", validarPostId, validarTagId, postsController.agregarUnTagAPost)
router.delete("/:id/tags/:tagId", validarPostId, validarTagId, postsController.quitarTagDePost)
router.delete("/:id/tags", validarPostId, postsController.quitarTodosLosTagsDePost)

module.exports = router;