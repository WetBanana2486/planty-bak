// src/routes/products.routes.js
import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
} from '../controllers/products.controller.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct); // Add auth middleware

export default router;
