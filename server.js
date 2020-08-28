const express = require('express');
const exphbs  = require('express-handlebars');

let PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const router = require("./controller/burgercontroller");
app.use(router);


app.listen(PORT);