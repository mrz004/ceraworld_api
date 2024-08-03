import Product from "../models/Product.js";

export async function addProduct(req, res) {
  const product = new Product({
    name: req.body["product_name"],
    featureImage: req.files.featureImage[0].filename,
    bannerImage: req.files.bannerImage[0].filename,
  });
  await product.save();
  res.status(200).send("product added successfully");
}

export async function getAllProducts(req, res) {
  const products = await Product.find();
  res.send(products);
}

export async function getProduct(req, res) {
  const product = await Product.findById(req.params.id);
  await product.populate("categories", "name featureImage _id");
  res.send(product);
}
