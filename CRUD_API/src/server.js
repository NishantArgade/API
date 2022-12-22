const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 8000;
const db = require("./DB/connection");
db();
const User = require("./DB/model");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/getuser", (req, res) => {
  User.find().then((doc) => {
    res.send(doc.length > 0 ? doc : "Nothing");
  });
  console.log("get User succussfuly");
});

app.post("/createuser", async (req, res) => {
  const { userId, productId, rating } = req.body;

  await User.create({ userId, productId, rating });

  console.log("create User succussfuly");
  res.send("create User succussfuly");
});

app.put("/updateuser", async (req, res) => {
  const { userId, productId, rating } = req.body;

  await User.updateOne(
    { userId: userId },
    { $set: { userId, productId, rating } }
  );

  console.log("update User succussfuly");
  res.send("update User succussfuly");
});
app.delete("/deleteuser", async (req, res) => {
  const { userId } = req.body;

  await User.deleteOne({ userId });

  console.log("delete User succussfuly");
  res.send("delete User succussfuly");
});

app.listen(port, () => {
  console.log(`server is listening at port http://localhost:${port}`);
});
