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
router.get("/:id", validarPostId, postsController.obtenerPost);
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
/**
 * @swagger
 * /posts/{id}/tag:
 *   patch:
 *     summary: Agregar múltiples tags a un post
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
 *               tagIds:
 *                 type: array
 *                 items:
 *                   type: integer
 *             example:
 *               tagIds: [1, 2, 3]
 *     responses:
 *       200:
 *         description: Tags agregados con exito
 *       404:
 *         description: El post no fue encontrado
 */
router.patch("/:id/tag", validarPostId, postsController.agregarTagsAPost)
 /**
 * @swagger
 * /posts/{id}/tag/{tagId}:
 *   patch:
 *     summary: Agregar un tag a un post
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del post
 *       - in: path
 *         name: tagId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del tag
 *     responses:
 *       200:
 *         description: Tag agregado al post con exito
 *       404:
 *         description: Post o Tag no encontrado
 */
router.patch("/:id/tag/:tagId", validarPostId, validarTagId, postsController.agregarUnTagAPost)
/**
 * @swagger
 * /posts/{id}/tag/{tagId}:
 *   delete:
 *     summary: Eliminar un tag de un post
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del post
 *       - in: path
 *         name: tagId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del tag
 *     responses:
 *       200:
 *         description: Tag eliminado del post con exito
 *       404:
 *         description: Post o Tag no encontrado
 */
router.delete("/:id/tag/:tagId", validarPostId, validarTagId, postsController.quitarTagDePost)
 /**
 * @swagger
 * /posts/{id}/tag:
 *   delete:
 *     summary: Eliminar todos los tags de un post
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
 *         description: Todos los tags fueron eliminados del post
 *       404:
 *         description: Post no encontrado
 */
router.delete("/:id/tag", validarPostId, postsController.quitarTodosLosTagsDePost)

module.exports = router;