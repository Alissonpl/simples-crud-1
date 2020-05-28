const express = require("express");

const ProductController = require("./controllers/ProductController");

const ListController = require("./controllers/ListController");

const routes = express.Router();

routes.post("/product", ProductController.create);

routes.get("/product", ProductController.index);

routes.delete("/product/:id", ProductController.delete);

routes.put("/product/:id", ProductController.update);

routes.get("/list", ListController.index);

module.exports = routes;
