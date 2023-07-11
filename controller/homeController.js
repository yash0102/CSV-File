const csvFile = require('../model/csv')

module.exports.home = async (req, res) => {
    // return res.send("<h1>This is Home Controller</h1>");
    try {
        let files = await csvFile.find({});

        return res.render('Home' , {
            title: 'Home',
            Files: files,
        });
    } catch (error) {
        console.log('Error in homeController ', error);
    }
};


// upload a file
module.exports.upload = async (req, res) => {
    try {

        // console.log("req file", req.file);

        if(!req.file) {
            return res.status(400).send('Please Upload a file!');
        }

        if(!req.file.mimetype.startsWith('text/csv')) {
            return res.status(400).send('Please selcet CSV files only!');
        }
        
    } catch (error) {
        console.log('Error in uploading files', error);
    }

    const { originalname , path , filename } = req.file;

    const file = await csvFile.create({
        FileName: originalname,
        FilePath: path,
        File: filename
    });


    return res.redirect('/');
}