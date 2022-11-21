/** @format */

module.exports = (app) => {
    const users = require("../Controllers/users.controller.js");

    const router = require("express").Router();

    // Create a new Tutorial
    router.post("/", users.create);

    router.get("/", users.findAll);

    router.get("/published", users.findAllPublished);

    router.get("/:id", users.findOne);

    // id ile kayit güncelleme
    router.put("/:id", users.update);

    // id ile kullanici silme
    router.delete("/:id", users.delete);

    app.use("/api/users", router);
};