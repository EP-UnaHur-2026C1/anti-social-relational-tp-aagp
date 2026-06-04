const { Router } = require("express");
const postsController = require("../controllers/post.controller");
const validarPost = require('../middlewares/validarPost');
const validarPostId = require('../middlewares/validarPostId');
const router = Router();

router.get("/", postsController.obtenerPosts);

router.get("/:id", validarPostId, postsController.obtenerPost); // va con la relacion del Tag

router.post("/", validarPost, postsController.crearPost);

router.put("/:id", validarPost, validarPostId, postsController.actualizarPost);

router.delete("/:id", validarPostId, postsController.eliminarPost);


module.exports = router;