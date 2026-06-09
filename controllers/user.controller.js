const { User } = require("../models");

const obtenerUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "nickname", "email"]
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener usuarios",
    });
  }
};

const obtenerUser = async (req, res) => {
  const user = req.user;
  res.status(200).json(user);
};

const crearUser = async (req, res) => {
  try {
    const { nickname, email, password } = req.body;
    const user = await User.create({
      nickname,
      email,
      password,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear el usuario",
    });
  }
};

const actualizarUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nickname, email, password } = req.body;
    const user = req.user;
    await user.update({
      nickname,
      email,
      password
    })
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar usuario",
    });
  }
};

const eliminarUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;
    await user.destroy();
    res.status(200).json({
      message: "Usuario eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar usuario",
    });
  }
};


module.exports = { 
  obtenerUsers, 
  obtenerUser, 
  crearUser, 
  actualizarUser, 
  eliminarUser 
};
