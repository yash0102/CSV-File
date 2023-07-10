// setting up express server
const express           = require('express');
const app               = express();
const expressLayout     = require('express-ejs-layouts');

// defining port number
const port              = process.env.port || 8000;

// added a parser
app.use(express.urlencoded());

// for getting static files
app.use(express.static('assets'));


// setting up view engine
app.set('view engine', 'ejs');
app.set('views','./views');


// Layouts
app.use(expressLayout);

// extract styles and script from sub pages into layouts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// Acquiring all the routes
app.use('/', require('./routes'));


// Running the server on defined port
app.listen(port, (err) => {
    if (err) {
        console.error("Error in running the server", err);
    }

    console.log(`Server is running on port: ${port}`);
})