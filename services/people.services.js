const fs = require('fs');
class PeopleService{
    getPeople(){
        return new Promise((res, rej) => {
            fs.readFile('data.json', 'utf8', (err, data) => {
                if (err) throw err;
                res(JSON.parse(data).people);
            });
        });
    }
    
    getPersonById(id){
        return new Promise((res, rej) => {
            fs.readFile('data.json', 'utf8', (err, data) =>{
                if (err) throw err;
                let people = JSON.parse(data).people;
                let person = people.find((item) => item.id == id);
                res(person);
            });
        });
    }
}

module.exports = new PeopleService();