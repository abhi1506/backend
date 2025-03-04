const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require("multer");


const storage = multer.memoryStorage();
const upload = multer({ storage }).array("images", 10); 


router.post("/", upload, productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.put("/:id", upload, productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
