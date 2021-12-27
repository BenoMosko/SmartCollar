const AnimalModel = require('./AnimalModel.js');

const getAnimals = () =>
{
    return new Promise((resolve, reject) =>
    {
        AnimalModel.find({}, function(error, data)
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

const getAnimal = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        AnimalModel.findById(id, function(error, data)
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

const updateAnimal = () =>
{

};

const addAnimal = () =>
{

};

const deleteAnimal = () =>
{

};

module.exports = {getAnimals, getAnimal, updateAnimal, addAnimal, deleteAnimal};