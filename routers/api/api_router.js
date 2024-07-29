import express from "express";
import {
  getProduct,
  getAllProducts,
} from "../../controllers/product_controller.js";
import {
  getCategory,
  getAllCategories,
} from "../../controllers/category_controller.js";

const router = express.Router();

router.route("/get/products").get(getAllProducts);
router.route("/get/products/:id").get(getProduct);
router.route("/get/categories").get(getAllCategories);
router.route("/get/categories/:id").get(getCategory);

export { router as api_router };
