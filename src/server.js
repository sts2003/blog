import express from "express";
import path from "path";
import morgan from "morgan";

const app = express();
const PORT = 3357;
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/etc", (req, res) => {
  res.render("etc");
});

app.listen(PORT, () => {
  console.log(`Server Start: ${PORT}`);
});
