const { Router } = require("express");
const usrCtrl = require("../controllers/user.controller");
const validarUser = require("../middlewares/validarUser")
const validarUserId = require("../middlewares/validarUserId")
const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener todos los users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Lista de users
 */
router.get("/", usrCtrl.obtenerUsers);
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtener un user por ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del user
 *     responses:
 *       200:
 *         description: Se encontro el user
 *       404:
 *         description: user no encontrado
 */
router.get("/:id", validarUserId, usrCtrl.obtenerUser);
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crear un user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *              - nickname
 *              - email
 *              - password
 *             properties:
 *               nickname:
 *                 type: string
 *                 example: "juan123"
 *               email:
 *                 type: string
 *                 example: "juan@gmail.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: user creado con exito
 *       400:
 *         description: Error de validación
 */
router.post("/",validarUser, usrCtrl.crearUser);
/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualizar un user
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *                 example: "juan123"
 *               email:
 *                 type: string
 *                 example: "juan@gmail.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: user actualizado con exito
 *       400:
 *         description: Error de validación
 *       404:
 *         description: user no encontrado
 */
router.put("/:id", validarUserId, validarUser, usrCtrl.actualizarUser);
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Eliminar un user
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del user
 *     responses:
 *       200:
 *         description: user eliminado correctamente
 *       404:
 *         description: user no encontrado
 */
router.delete("/:id",validarUserId, usrCtrl.eliminarUser);

module.exports = router;
