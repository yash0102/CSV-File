const file = require('../model/csv')

module.exports.home = async (req, res) => {
    // return res.send("<h1>This is Home Controller</h1>");
    try {
        let files = await file.find({});

        return res.render('Home' , {
            title: 'Home',
            Files: files,
        });
    } catch (error) {
        console.log('Error in homeController ', error);
    }
};