const express = require('express');
const AnimalBL = require('../../Models/AnimalBL.js');
const router = express.Router();

//Get All
router.route('/').get(function(request, response)
{
    AnimalBL.getAnimals().then(data =>
        {
            return response.json(data);
        });
});


//Get by ID
router.route('/:id').get(function(request, response)
{
    let id = request.params.id;

    AnimalBL.getAnimal(id).then(data =>
        {
            return response.json(data);
        });
});


//Update
router.route('/:id').put(function(request, response)
{
    let obj = request.body;
    let id = request.params.id;


    AnimalBL.updateAnimal(id,obj).then(data =>
        {
            return response.json(data);
        })
});


//Add
router.route('/').post(function(request, response)
{
    let obj = request.body;
    console.log(obj);

    AnimalBL.addAnimal(obj).then(data =>
        {
            return response.json(data);
        })
});


//Delete
router.route('/:id').delete(function(request, response)
{
    let id = request.params.id;

    console.log(id)

    movieBL.deleteMovie(id).then(data =>
        {
            return response.json(data);
        })
});

module.exports = router;