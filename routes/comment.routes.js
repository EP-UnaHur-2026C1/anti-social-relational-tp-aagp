const { Router } = require("express");
const commentController = require("../controllers/comment.controllers");
const validarComentario = require("../middlewares/validarComentario");
const validarComentarioId = require("../middlewares/validarComentarioId");
const router = Router();

router.get("/", commentController.obtenerComentarios)
router.get("/:id", validarComentarioId,commentController.obtenerComentario)
router.post("/", validarComentario, commentController.crearComentario)
router.put("/:id", validarComentarioId, validarComentario, commentController.actualizarComentario)
router.delete("/:id", validarComentarioId, commentController.eliminarComentario)

module.exports = router;