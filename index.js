// setting up express server
const express = require('express');
const app = express();

// defining port number
const port = process.env.port || 8000;


// Acquiring all the routes
app.use('/', require('./routes'));


// Running the server on defined port
app.listen(port, (err) => {
    if (err) {
        console.error("Error in running the server", err);
    }

    console.log(`Server is running on port: ${port}`);
})