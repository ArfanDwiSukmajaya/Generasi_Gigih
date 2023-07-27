import express from "express";
const router = express.Router();
import { createProductController, getProductByVideoIDController, deleteProductByProductIDController } from "../controllers/productController.js";

router.post("/products", createProductController);
router.get("/products/:videoID", getProductByVideoIDController);
router.delete("/products/:productID", deleteProductByProductIDController);

export default router;
