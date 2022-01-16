const BodyPartsModel = require('./BodyPartsModel.js');

//Get All
const getBodyParts = () =>
{
    return new Promise((resolve, reject) =>
    {
        BodyPartsModel.find({}, function(error, data)
        {
            if(error)
            {
                reject(error);
            }
            else
            {
                resolve(data);
            }
        });
    });

};

module.exports = {getBodyParts};