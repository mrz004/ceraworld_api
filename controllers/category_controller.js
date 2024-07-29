import Category from "../models/Category.js";
import Product from "../models/Product.js";

export async function addCategoryForm(req, res) {
  const products = await Product.find();
  const filteredProducts = Array.from(products).map((product) => ({
    name: product.name,
    val: product._id,
  }));
  res.render("add_category", { products: filteredProducts });
}

export async function addCategory(req, res) {
  const product = await Product.findById(req.body["product_id"]);
  if (!product) {
    res.status(400).json({ message: "invalid product id" });
  }
  console.log(product);

  const category = new Category({
    name: req.body["category_name"],
    featureImage: req.files.featureImage[0].filename,
    bannerImage: req.files.bannerImage[0].filename,
    imageCollection: req.files.imageCollection.map((file) => file.filename),
    product: req.body["product_id"],
  });
  const savedCategory = await category.save();
  product.categories.push(savedCategory);
  product.save();
  res.status(200).send("product added successfully");
}

export async function getAllCategories(req, res) {
  const categories = await Category.find();
  res.status(200).json(categories);
}

export async function getCategory(req, res) {
  const categories = await Category.findById(req.params.id);
  res.status(200).json(categories);
}
