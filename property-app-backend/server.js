const express = require('express');
const app = express();

const authRouter = require('./routes/auth');
const userRoutes = require('./routes/user');
const connectDB = require('./config/db');

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API working');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});

// Connect to the database and start the server
connectDB().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});