const rewire = require('rewire')
rewire('../cities/cities.service')
const {getCityByZipCode} = require('../cities/cities.service');
spies = require('chai-spies');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const {faker} = require('@faker-js/faker');
const expect = chai.expect;
chai.use(chaiAsPromised);
chai.should();

describe("Testing for cities.service", () => {
    describe("Testing for getCityByZipCode function", () => {
        it('Should return the data of the city by given zip code', () => {
            return expect(getCityByZipCode(94122)).to.eventually.deep.equal('San Francisco, CA, United States');
        })
        it('Should return an error if the city with given zip code is not found', () => {
            return expect(getCityByZipCode(faker.address.zipCode())).to.eventually.be.rejectedWith('No cities found!');
        })
    })
})