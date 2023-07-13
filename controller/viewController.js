const fs            = require('fs');
const csvFile       = require('../model/csv');
const csvParser     = require('csv-parser');


module.exports.view = async ( req, res) => {
    try {
        let viewFile = await csvFile.findById(req.params.id);
        // console.log('viewFile ',viewFile);

        const header = [];
        const result = [];

        fs.createReadStream(viewFile.FilePath)
        .pipe(csvParser())
        .on('headers' , (headers) => {
            header.push(...headers);
        })
        .on('data' , (data) => result.push(data))
        .on('end' , () => {
            res.render('View' , {
                title : 'File View',
                FileName : viewFile.FileName,
                head : header,
                data :result,
                length: result.length
            });
        })

        
    } catch (error) {
        console.log('Error in Viewing File ', error);
        return res.status(500).send('Internal server error');
    }
}