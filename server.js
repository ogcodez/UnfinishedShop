const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var logger = require('morgan');
const app = express();
const path = require('path');

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));

const db = require("./prodavnica-server/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected!");
    })
    .catch(err => {
        console.log("Neuspesno!", err);
        process.exit();
    });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Poy" });
});

require("./prodavnica-server/routes/artikli.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});