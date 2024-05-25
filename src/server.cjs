const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

// PostgreSQL database configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'payment',
  password: 'amine1662001',
  port: 5432
});

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('Connected to the database at:', res.rows[0].now);
  }
});

// Handle connection errors
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Middleware
app.use(express.json());

// Register endpoint
app.post('/register', async (req, res) => {
  // Registration logic
});

// Login endpoint
app.post('/login', async (req, res) => {
  // Login logic
});

// Define a route handler for the root endpoint
app.get('/', (req, res) => {
  res.send('Server is running on port 3000');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
