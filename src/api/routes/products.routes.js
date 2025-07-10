import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/products.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', verifyJWT, createProduct); // Admin features
router.put('/:id', verifyJWT, updateProduct);
router.delete('/:id', verifyJWT, deleteProduct);

export default router;