const { Router } = require("express");
const usrCtrl = require("../controllers/user.controller");
const validarUser = require("../middlewares/validarUser")
const validarUserId = require("../middlewares/validarUserId")
const router = Router();

router.get("/", usrCtrl.obtenerUsers);
router.get("/:id", validarUserId, usrCtrl.obtenerUser);
router.post("/", validarUser, usrCtrl.crearUser);
router.put("/:id", validarUserId, validarUser, usrCtrl.actualizarUser);
router.delete("/:id", validarUserId, usrCtrl.eliminarUser);

module.exports = router;
