require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/twitter", (req, res) => {
  res.send("codenoch.com");
});
app.get("/login", (req, res) => {
  res.send("login page " + "<h1>Please login at the codenoch</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2 >Welcome to the coding Era...<br> codenoch<h/2>");
});

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
