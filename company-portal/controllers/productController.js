const Product = require("../models/productModels");
const cloudinary = require("cloudinary").v2;

// Upload images to Cloudinary and return URLs & public IDs
const uploadImagesToCloudinary = async (files) => {
  return await Promise.all(
    files.map((file) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: "products" },
          (error, result) => {
            if (error) reject(error);
            else resolve({ url: result.secure_url, public_id: result.public_id });
          }
        ).end(file.buffer);
      });
    })
  );
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock, featured } = req.body;
    console.log(req.body, req.files)
    if (!name || !description || !price || !category) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const uploadedImages = req.files.length > 0 ? await uploadImagesToCloudinary(req.files) : [];

    const newProduct = new Product({
      name,
      description,
      price,
      category,
      stock,
      images: uploadedImages,
      featured: featured || false,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const { featured, category } = req.query;
    const filter = {};

    if (featured) filter.featured = featured === "true";
    if (category) filter.category = category;

    const products = await Product.find(filter);
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};


exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
};


exports.updateProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock, featured, removeImages = [] } = req.body;

    let product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    let updatedImages = product.images;

    // Remove selected images from Cloudinary
    if (removeImages.length > 0) {
      await Promise.all(removeImages.map((public_id) => cloudinary.uploader.destroy(public_id)));
      updatedImages = updatedImages.filter((img) => !removeImages.includes(img.public_id));
    }

    // Upload new images
    if (req.files.length > 0) {
      const uploadedImages = await uploadImagesToCloudinary(req.files);
      updatedImages = [...updatedImages, ...uploadedImages];
    }

    product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, category, stock, images: updatedImages, featured },
      { new: true }
    );

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update product" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    // Delete images from Cloudinary
    await Promise.all(product.images.map((img) => cloudinary.uploader.destroy(img.public_id)));

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete product" });
  }
};
