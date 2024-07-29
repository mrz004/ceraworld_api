import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
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
  description: {
    type: String,
    required: true,
  },
  imageCollection: [{ type: String, required: true }],
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
