const { Router } = require("express");
const postsController = require("../controllers/post.controller");
const validarPost = require('../middlewares/validarPost');
const { validarPostIdConUser, validarPostId } = require('../middlewares/validarPostId');
const { validarTagId } = require('../middlewares/validarTagId')
const validarTag = require('../middlewares/validarTag')
const validarTagsPost = require("../middlewares/validarTagsPost")
const router = Router();

router.get("/", postsController.obtenerPosts);
router.get("/:id", validarPostId, postsController.obtenerPost);
router.post("/", validarPost, postsController.crearPost);
router.put("/:id", validarPostId, validarPost, postsController.actualizarPost);
router.delete("/:id", validarPostId, postsController.eliminarPost);
router.patch("/:id/tag", validarPostId, validarTagsPost, postsController.agregarTagsAPost)
router.patch("/:id/tag/:tagId", validarPostId, validarTagId, postsController.agregarUnTagAPost)
router.delete("/:id/tag/:tagId", validarPostId, validarTagId, postsController.quitarTagDePost)
router.delete("/:id/tag", validarPostId, validarTagsPost, postsController.quitarTodosLosTagsDePost)

module.exports = router;