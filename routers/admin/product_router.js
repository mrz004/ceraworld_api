import express from "express";
import {
  addProduct,
  getAllProducts,
} from "../../controllers/product_controller.js";
import file_uploader from "../../middleware/file_uploader.js";

const router = express.Router();

router
  .route("/add")
  .get((req, res) => res.render("add_product.ejs"))
  .post(
    file_uploader.fields([
      { name: "featureImage", maxCount: 1 },
      { name: "bannerImage", maxCount: 1 },
    ]),
    addProduct
  );

router.route("/get").get(getAllProducts);

export { router as admin_product_router };
