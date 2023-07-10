

module.exports.home = (req, res) => {
    // return res.send("<h1>This is Home Controller</h1>");
    try {
        return res.render('Home' , {
            title: 'Home',
        });
    } catch (error) {
        console.log('Error in homeController ', error);
    }
};