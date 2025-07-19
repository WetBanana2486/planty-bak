import prisma from '../models/prismaClient.js';

// Get all products, use findMany to retrieve all products
// Include category information and order by creation date in descending order
export const getAllProducts = async () => {
  return await prisma.product.findMany({
    include: { category: true },
    orderBy: { createdAt: 'desc' },
  });
};

// Get a product by ID
export const getProductById = async (id) => {
  return await prisma.product.findUnique({
    where: { id },
    include: { category: true },
  });
};

// Create a new product (validated by controller)
export const createProduct = async (data) => {
  return await prisma.product.create({
    data,
  });
};

// Update an existing product by ID (validated by controller)
// Use the data object to update fields
export const updateProduct = async (id, data) => {
  return await prisma.product.update({
    where: { id },
    data,
  });
};

// Delete a product by ID (validated by controller)
export const deleteProduct = async (id) => {
  return await prisma.product.delete({
    where: { id },
  });
};
