const { Router } = require("express");
const postsController = require("../controllers/post.controller");
const validarPost = require('../middlewares/validarPost');
const { validarPostIdConUser, validarPostId } = require('../middlewares/validarPostId');
const router = Router();

router.get("/", postsController.obtenerPosts);

router.get("/:id", validarPostIdConUser, postsController.obtenerPost);

router.post("/", validarPost, postsController.crearPost);

router.put("/:id", validarPostId, validarPost, postsController.actualizarPost);

router.delete("/:id", validarPostId, postsController.eliminarPost);


module.exports = router;