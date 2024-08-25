// Import the mongoose module
const mongoose = require('mongoose');

// Connection URI from MongoDB Compass
const mongoDB = 'mongodb://localhost:27017/Suji'; // Replace with your actual connection string

// Connect to MongoDB without deprecated options
mongoose.connect(mongoDB);

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Bind connection to open event (log a successful connection)
db.once('open', function() {
    console.log('Connected to MongoDB successfully!');
});
