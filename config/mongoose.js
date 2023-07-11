const mongoose = require('mongoose');


// connnect to databases
mongoose.connect('mongodb://127.0.0.1/CSVMaster');

// acquire the connection 
const db = mongoose.connection;

// Error 
db.once('error', console.error.bind(console,"Error in connecting to Database"));

// up and running then print the message
db.once('open', ()=> {
    console.log("Database connected successfully");
})