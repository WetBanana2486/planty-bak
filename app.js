import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
// Set the port from environment variable or default to 4000
const port = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data store for plants
let plants = [
  { id: 1, name: "Monstera Deliciosa", species: "Monstera deliciosa", age: 2, health: "Good" },
  { id: 2, name: "Pothos", species: "Epipremnum aureum", age: 1, health: "Excellent" },
];

// Helper to generate unique IDs
const generateId = () => {
  const maxId = plants.length > 0 ? Math.max(...plants.map(p => p.id)) : 0;
  return maxId + 1;
};

// Routes

// GET all plants
app.get('/plants', (req, res) => {
  res.json(plants);
});

// GET a single plant by ID
app.get('/plants/:id', (req, res) => {
  const id = Number(req.params.id);
  const plant = plants.find(p => p.id === id);

  if (plant) {
    res.json(plant);
  } else {
    res.status(404).send('Plant not found');
  }
});

// POST a new plant
app.post('/plants', (req, res) => {
  const body = req.body;

  if (!body.name || !body.species) {
    return res.status(400).json({
      error: 'name and species are required'
    });
  }

  const plant = {
    id: generateId(),
    name: body.name,
    species: body.species,
    age: body.age || 0,
    health: body.health || "Unknown",
  };

  plants = plants.concat(plant);
  res.status(201).json(plant);
});

// PUT (update) an existing plant
app.put('/plants/:id', (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;

  const plantToUpdate = plants.find(p => p.id === id);

  if (!plantToUpdate) {
    return res.status(404).send('Plant not found');
  }

  const updatedPlant = { ...plantToUpdate, ...body, id: id };
  plants = plants.map(p => p.id === id ? updatedPlant : p);

  res.json(updatedPlant);
});

// DELETE a plant
app.delete('/plants/:id', (req, res) => {
  const id = Number(req.params.id);
  plants = plants.filter(p => p.id !== id);

  res.status(204).end(); // 204 No Content
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
