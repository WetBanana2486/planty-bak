import express from "express";
import dotenv from 'dotenv';
import router from "./routes/index.routes.js"; // Import the main router

dotenv.config();

const app = express();
// Set the port from environment variable or default to 4000
const port = process.env.PORT || 4000;

app.use('/api', router); // Use the main router for all API routes

// Middleware to parse JSON bodies
app.use(express.json());

// Routes

export default app; // Export the app for testing or further configuration