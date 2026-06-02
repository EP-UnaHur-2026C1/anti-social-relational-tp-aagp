const { Router } = require("express");
const postsController = require("../controllers/postController");
const router = Router();

router.get("/", postsController.obtenerPosts);

router.get("/:id", postsController.obtenerPost);

router.post("/", postsController.crearPost);

router.put("/:id", postsController.actualizarPost);

router.delete("/:id", postsController.eliminarPost);


module.exports = router;