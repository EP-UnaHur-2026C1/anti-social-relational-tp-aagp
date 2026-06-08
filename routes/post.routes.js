const { Router } = require("express");
const postsController = require("../controllers/post.controller");
const validarPost = require('../middlewares/validarPost');
const { validarPostIdConUser, validarPostId } = require('../middlewares/validarPostId');
const validarImagenId = require('../middlewares/validarPostImgId')
const validarTagId = require('../middlewares/validarTagId')
const validarTag = require('../middlewares/validarTag')
const router = Router();

router.get("/", postsController.obtenerPosts);

router.get("/:id", validarPostIdConUser, postsController.obtenerPost);

router.post("/", validarPost, postsController.crearPost);

router.put("/:id", validarPostId, validarPost, postsController.actualizarPost);

router.delete("/:id", validarPostId, postsController.eliminarPost);


// imagenes
router.post("/", validarPost, postsController.crearPostConImagen)
router.patch("/:id/imagenes", validarPostId, postsController.agregarImagen)
router.delete("/:id/imagenes/:imagenesId", validarPostId, validarImagenId, postsController.eliminarImagen)
router.patch("/:id/imagenes", validarPostId, postsController.eliminarTodasLasImagenesDelPost)
router.get("/:id/imagenes", validarPostId, postsController.obtenerImagenesDePost)


// tags
router.get("/:id/tags", validarPostId, postsController.obtenerTags)
router.patch("/:id/tags", validarPostId, validarTag, postsController.agregarTags)
router.patch("/:id/tags/:tagId", validarPostId, validarTagId, postsController.asociarTag)
router.delete("/:id/tags/:tagId", validarPostId, validarTagId, postsController.eliminarTag)
router.delete("/:id/tags", validarPostId, postsController.eliminarTodosLosTags)


module.exports = router;