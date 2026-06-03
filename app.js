const express = require("express");
const app = express();
const db = require("./models");
const routerPosts = require("./routes/postRoutes")

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/posts", routerPosts);

app.listen(PORT, async () => {
  await db.sequelize.sync();
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});