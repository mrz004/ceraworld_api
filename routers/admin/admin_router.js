import express from "express";
import { admin_product_router } from "./product_router.js";
import { admin_category_router } from "./caterogry_router.js";

const router = express.Router();

router.use("/product", admin_product_router);
router.use("/category", admin_category_router);

router.route("/").get((req, res) => {
  res.send("Login as admin");
});

export { router as admin_router };
