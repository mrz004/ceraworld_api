import mongoose from "mongoose";

const productCollectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  categories: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const ProductCollection = mongoose.model(
  "ProductCollection",
  productCollectionSchema
);
export default ProductCollection;
