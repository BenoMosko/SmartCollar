const AnimalModel = require('./AnimalModel.js');


//Get All
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


//Get by ID
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


//Update
const updateAnimal = (id, obj) =>
{
    return new Promise((resolve, reject) =>
    {
        AnimalModel.findByIdAndUpdate(id, {
            Type : obj.Type
        }, function(error)
        {
            if(error)
            {
                reject(error);
            }
            else
            {
                resolve("Animal Updated");
            }
        })
    });

};


//Add
const addAnimal = (obj) =>
{
    return new Promise((resolve, reject) =>
    {
        let animal = new AnimalModel({
            Type : obj.Type
        })
        animal.save(function(error)
        {
            if(error)
            {
                reject(error);
            }
            else
            {
                resolve("Animal Added");
            }
        })
    })
};


//Delete
const deleteAnimal = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        AnimalModel.findByIdAndDelete(id, function(error)
        {
            if(error)
            {
                reject(error);
            }
            else
            {
                resolve("Animal Deleted");
            }
        })
    });
};

module.exports = {getAnimals, getAnimal, updateAnimal, addAnimal, deleteAnimal};