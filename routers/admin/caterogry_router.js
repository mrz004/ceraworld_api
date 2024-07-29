import express from "express";
import multer from "multer";
import {
  addCategory,
  addCategoryForm,
} from "../../controllers/category_controller.js";
import file_uploader from "../../middleware/file_uploader.js";

const router = express.Router();

const upload = multer({ dest: "public/upload" });

router
  .route("/add")
  .get(addCategoryForm)
  .post(
    file_uploader.fields([
      { name: "featureImage", maxCount: 1 },
      { name: "bannerImage", maxCount: 1 },
      { name: "imageCollection" },
    ]),
    addCategory
  );

router.route("/get").get();

export { router as admin_category_router };
