const fs = require('fs');
class PeopleServices{
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

    addPerson(body){
        return new Promise((res, rej) => {
            fs.readFile('data.json', (err, data) => {
                if (err) throw err;

                let fileData = JSON.parse(data);
                let people = fileData.people;
                people.push(body);

                fs.writeFile("data.json", JSON.stringify(fileData, null, 4), (err) => {
                    if (err) throw err;
                });

                res('Person Added');
            });
        });
    }

    editPerson(id, body){
        return new Promise((res, rej) => {
            fs.readFile('data.json', (err, data) => {
                if (err) throw err;

                let fileData = JSON.parse(data);
                let people = fileData.people;
                people.find((item, index) => {
                    if (id == item.id){
                        people[index] = body;
                    }
                });

                fs.writeFile("data.json", JSON.stringify(fileData, null, 4), (err) => {
                    if (err) throw err;
                });

                res('Person Edited');
            });
        });
    }

    deletePerson(id){
        return new Promise((res, rej) => {
            fs.readFile('data.json', (err, data) => {
                if (err) throw err;

                let fileData = JSON.parse(data);
                let people = fileData.people;
                people.forEach((item, index) => {
                    if (id == item.id){
                        people.splice(index, 1);
                    };
                });

                fs.writeFile("data.json", JSON.stringify(fileData, null, 4), (err) => {
                    if (err) throw err;
                });

                res('Person Delete');
            });
        });
    }
}

module.exports = new PeopleServices();