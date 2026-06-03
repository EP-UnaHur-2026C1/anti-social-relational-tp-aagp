const { Router } = require("express");
const postsController = require("../controllers/postController");
const validarPost = require('../middlewares/validarPost');
const validarPostId = require('../middlewares/validarPostId');
const router = Router();

router.get("/", postsController.obtenerPosts);

router.get("/:id", postsController.obtenerPost);

router.post("/", validarPost, postsController.crearPost);

router.put("/:id", validarPost, validarPostId, postsController.actualizarPost);

router.delete("/:id", validarPostId, postsController.eliminarPost);


module.exports = router;