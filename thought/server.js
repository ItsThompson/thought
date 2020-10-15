const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./src/app/routes/thought.routes")(app);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});

app.get("*", (req, res) => {
    res.json({ message: "Welcome to thought application." });
});

// Connect to db
const db = require("./src/app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });
