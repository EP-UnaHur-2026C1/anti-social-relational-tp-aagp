const express = require("express");
const app = express();
const db = require("./models");
const routerComment = require("./routes/comment.routes");
const routerTag = require("./routes/tag.routes")
const routerPostImg = require("./routes/postImage.routes")
const routerPosts = require("./routes/post.routes");

const routerUsers = require("./routes/users.routes")

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/comments", routerComment);
app.use("/tag",routerTag);
app.use("/postimage",routerPostImg)
app.use("/posts", routerPosts);
app.use("/users", routerUsers)

app.listen(PORT, async () => {
  await db.sequelize.sync();
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
