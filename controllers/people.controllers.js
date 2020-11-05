const PeopleServices = require('../services/people.services');

class PeopleControllers{
    async getPeople(){
        let people = await PeopleServices.getPeople();
        return people;
    }

    async getPersonById(id){
        let person = await PeopleServices.getPersonById(id);
        return person;
    }

    async addPerson(body){
        let answer = await PeopleServices.addPerson(body);
        return answer;
    }

    async editPerson(id, body){
        let answer = await PeopleServices.editPerson(id, body);
        return answer;
    }

    async deletePerson(id){
        let answer = await PeopleServices.deletePerson(id);
        return answer;
    }
}

module.exports = new PeopleControllers();