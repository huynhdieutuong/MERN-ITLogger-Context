require('dotenv').config({ path: './config/.env' });
const express = require('express');
const app = express();
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');

const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');

// Route files
const techs = require('./routes/techs');
const logs = require('./routes/logs');

// Connect to database
connectDB();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser middleware
app.use(express.json());

// Mount routes
app.use('/api/v1/techs', techs);
app.use('/api/v1/logs', logs);

// Error handler middleware
app.use(errorHandler);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Port
const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
  )
);

// Handle unhandled promise prejections
process.on('unhandledRejection', (err, promise) => {
  console.error(`Error: ${err.message}`.red);

  server.close(() => process.exit(1));
});
