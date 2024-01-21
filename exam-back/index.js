import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  title: String,
  img: String,
  price: Number,
});

const productModel = mongoose.model("product", productSchema);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const data = await productModel.find({});
  res.send(data);
});

app.get("/:id", async (req, res) => {
  const { id } = req.params; 
  const data = await productModel.findById(id); 
  res.send(data);
});

app.post("/", async (req, res) => {
  const { title, img, price } = req.body;
  const newProduct = await new productModel({ title, img, price });
  newProduct.save();
  res.send("Got a POST request");
});

app.put("/:id", async (req, res) => {
  const { title, img, price } = req.body;
  const { id } = req.params;
  const data = await productModel.findByIdAndUpdate(id, { title, img, price });
  res.send(data);
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await productModel.findByIdAndDelete(id);
  res.send(data);
});

mongoose
  .connect(process.env.SECRET_KEY)
  .then(console.log("connected"))
  .catch((err) => console.log("not connected"));

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
