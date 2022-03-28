const axios = require('axios');

module.exports = {
    async getCityDataByZipCode(zipCode) {
        const apiResponse = await axios.get(`https://api.zippopotam.us/us/${zipCode}`)
        return apiResponse.data
    }
}