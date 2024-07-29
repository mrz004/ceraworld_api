import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  bannerImage: {
    type: String,
    required: true,
  },
  featureImage: {
    type: String,
    required: true,
  },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});

const Product = mongoose.model("Product", productSchema);
export default Product;
