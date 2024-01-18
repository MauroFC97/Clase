import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  description: { type: String, required: true, max: 1000 },
  stock: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    enum: ["deportes", "ropa", " tecnologia"],
  },
});

const Product = mongoose.model("Products", productSchema);

export default Product;
