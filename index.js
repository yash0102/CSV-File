const express = require('express');
const app = express();
const port = process.env.port || 8000;


app.get('/', (req, res) => {
    return res.send('<h1>This is CSV file</h1>');
});


app.listen(port, (err) => {
    if (err) {
        console.error("Error in running the server", err);
    }

    console.log(`Server is running on port: ${port}`);
})