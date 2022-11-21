/** @format */

const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const corsOptions = {
    origin: process.env.ISTEST == "true" ? process.env.CORS_TEST : process.env.CORS,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "SOS api server ayaklandi :)" });
});

require("./app/routes/users.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda calisiyor.`);
});