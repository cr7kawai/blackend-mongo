var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
 res.json("Lista todos los productos");
});


router.get("/:id", function (req, res, next) {
 res.json("Encontrando producto");
});


router.post("/", function (req, res, next) {
 res.json("Guardando Producto");
});


router.put("/:id", function (req, res, next) {
 res.json("Modificando producto");
});


router.delete("/:id", function (req, res, next) {
 res.json("Eliminando producto");
});


module.exports = router;