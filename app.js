const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require('./routes/authRoutes');

const app = express();

// middleware
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI =
  "mongodb+srv://devmudi1:smoothies1@cluster0.uco5j.mongodb.net/smoothies-collection";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
app.use(authRoutes)
