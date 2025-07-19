import * as ProductService from '../services/product.service.js';

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductService.getAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

export const getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await ProductService.getById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
};
export const createProduct = async (req, res, next) => {
  try {
    const productData = req.body;
    const newProduct = await ProductService.create(productData);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
}
export const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const productData = req.body;
    const updatedProduct = await ProductService.update(id, productData);
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (err) {
    next(err);
  }
}
export const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedProduct = await ProductService.delete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
