import express from 'express';
import productRoutes from './products.routes.js';
import authRoutes from './auth.routes.js';

const router = express.Router();

router.use('/products', productRoutes);
router.use('/auth', authRoutes);

export default router;
