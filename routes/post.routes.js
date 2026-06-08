const { Router } = require("express");
const postsController = require("../controllers/post.controller");
const validarPost = require('../middlewares/validarPost');
const { validarPostIdConUser, validarPostId } = require('../middlewares/validarPostId');
const validarImagenId = require('../middlewares/validarPostImgId')
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
router.get("/:id/imagenes", validarPost, postsController.obtenerImagenesDePost)




// router.post("/:id/tag", validarPostId, postController.asignarTag)

// router.post("/:id/tag/:idtag", validarpostid, postcontroller.asociartag)



module.exports = router;

/**
 *  crearPostConImagen,
    agregarImagen,
    eliminarImagen,
    eliminarTodasLasImagenesDelPost,
    obtenerImagenesDePost
 * 
 */