const PeopleService = require('../services/people.services');

class PeopleControllers{
    async getPeople(){
        let people = await PeopleService.getPeople();
        return people;
    }
    async getPersonById(id){
        let person = await PeopleService.getPersonById(id);
        return person;
    }
}

module.exports = new PeopleControllers();