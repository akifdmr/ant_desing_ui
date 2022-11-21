/** @format */

module.exports = (app) => {
    const users = require("../../src/controllers/user.controller.js");

    const router = require("express").Router();

    // Create a new Tutorial
    router.post("/", users.create);

    // Retrieve all Tutorials
    router.get("/", users.findAll);

    // Retrieve all published Tutorials
    router.get("/published", users.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", users.findOne);

    // id ile kayit güncelleme
    router.put("/:id", users.update);

    // id ile kullanici silme
    router.delete("/:id", users.delete);

    app.use("/api/users", router);
};