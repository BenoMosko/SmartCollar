const express = require('express');
const BodyPartsBL = require('../../Models/BodyPartsBL.js');
const router = express.Router();

//Get All
router.route('/').get(function(request, response)
{
    BodyPartsBL.getBodyParts().then(data =>
        {
            return response.json(data);
        });
});

module.exports = router;