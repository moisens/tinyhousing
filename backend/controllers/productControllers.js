import Product from "../models/Product.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import cloudinary from "cloudinary";
import fs from "fs";

const cloud = cloudinary.v2;

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProduct = async (req, res) => {
  const queryObject = {};
  const { category } = req.query;
  if (category) {
    queryObject.category = category;
  }
  const products = await Product.find(queryObject); //const products = await Product.find({});
  const totalHouses = await Product.countDocuments(queryObject);
  res.status(StatusCodes.OK).json({ products, totalHouses });
};

const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOne({ _id: productId });
  res.status(StatusCodes.OK).json({ product });
};

const updateProduct = async (req, res) => {
  const { id: productId } = req.params;
  const { name, country, price, ref, size, bedroom, bathroom } = req.body;
  if (
    name === "" ||
    country === "" ||
    price === "" ||
    ref === "" ||
    size === "" ||
    bedroom === "" ||
    bathroom === ""
  )
    throw new BadRequestError("You must provide all the values");
  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product)
    throw new NotFoundError(`There is no product with id: ${productId}`);
  res.status(StatusCodes.OK).json({ product });
};

const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOne({ _id: productId });
  if (!product)
    throw new NotFoundError(`There is no product with id: ${productId}`);
  await product.remove();
  res.status(StatusCodes.OK).json({ product });
};

const uploadProductImage = async (req, res) => {
  //console.log(req.files.image);
  const result = await cloud.uploader.upload(req.files.image.tempFilePath, {
    use_filename: true,
    folder: "tiny-housing",
  });
  //console.log("result: ", result);
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

export {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadProductImage,
};
