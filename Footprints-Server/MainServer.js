// app.js
const express = require('express');
const process = require("process");
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];
const app = express();

app.use(express.json());

// Define your routes here

// Start the server
const PORT = config.server_port || 8000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
});

