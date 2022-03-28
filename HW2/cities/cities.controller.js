const express = require('express');
const asyncHandler  = require('express-async-handler');

const citiesService = require('./cities.service');
const router = express.Router();

router.get('/:zipCode', asyncHandler(async (req, res) => {
    zipCode = req.params['zipCode'];
        const result = await citiesService.getCityByZipCode(zipCode)
        res.send(result)
}))

module.exports = router;