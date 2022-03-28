const {getCityDataByZipCode} = require('../cities/cities.repository');
spies = require('chai-spies');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
const sinon = require('sinon');
const { default: axios } = require('axios');
chai.use(chaiAsPromised);
chai.should();
chai.use(spies);


describe("Testing with stub for cities.repository", () => {
    describe("Testing with stub for getCityDataByZipCode function", () => {
        before(() => {
            sinon.stub(axios, 'get').yields(null, null, JSON.stringify([
            {
                "post code": "75060", 
                "country": "United States", 
                "country abbreviation": "US", 
                "places": [{"place name": "Irving", 
                "longitude": "-96.9597", 
                "state": "Texas", 
                "state abbreviation": "TX", 
                "latitude": "32.8023"}]
            }
        ]))
        })

        after(() => {
            axios.get.restore();
        })

        it('Should return the data of the city by given zip code', (done) => {
              getCityDataByZipCode(75060).then(() => {
                sinon.assert.calledOnce(axios.get);
              })
            done();
        })
    })
})
