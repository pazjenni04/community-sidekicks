const path = require("path");
const express = require("express");
const sequelize = require("./config/connection");
const session = require("express-session");
const routes = require("./controllers");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8001;

const hbs = exphbs.create({});

const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

//connects to handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Listening on port 8001!"));
});
