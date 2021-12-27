const express = require('express');
const AnimalBL = require('../../Models/AnimalBL.js');
const router = express.Router();

router.route('/').get(function(request, response)
{
    AnimalBL.getAnimals().then(data =>
        {
            return response.json(data);
        });
});

router.route('/:id').get(function(request, response)
{
    let id = request.params.id;

    AnimalBL.getAnimal(id).then(data =>
        {
            return response.json(data);
        });
});

module.exports = router;