import * as ProductService from '../services/products.service.js';

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductService.getAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
};