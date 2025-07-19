import { PrismaClient } from '@prisma/client';
// Importing PrismaClient from the Prisma client package to interact with the database
const prisma = new PrismaClient();
export default prisma;