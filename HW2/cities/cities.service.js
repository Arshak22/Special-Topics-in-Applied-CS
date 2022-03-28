const NotFoundError = require('../errors/not-found.error');
const citiesRepository = require('./cities.repository');


module.exports = {
    async getCityByZipCode(zipCode) {
        try {
            const zip = await citiesRepository.getCityDataByZipCode(zipCode);
            return (zip['places'][0]['place name'] + ", " + zip['places'][0]['state abbreviation'] + ", " + zip['country']);
        }
        catch {
            throw new NotFoundError('No cities found!');
        }        
    }
}