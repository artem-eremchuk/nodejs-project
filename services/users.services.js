const fs = require('fs');

class UsersServices{
    getUsers(){
        return new Promise((res, rej) => {
            fs.readFile('data.json', 'utf8', (err, data) => {
                if (err) throw err;
                res(JSON.parse(data).users);
            });
        });
    }

    getUser(email){
        return new Promise((res, rej) => {
            fs.readFile('data.json', (err, data) => {
                if (err) throw err;

                let fileData = JSON.parse(data);
                let users = fileData.users;
                const userSearchResult = users.find((user) => {
                    if (user.email === email){
                        return user;
                    }
                });

                res(userSearchResult); // user or underfind
            });
        });
    }

    addUser(body){
        return new Promise((res, rej) => {
            fs.readFile('data.json', (err, data) => {
                if (err) throw err;

                let fileData = JSON.parse(data);
                let users = fileData.users;
                users.push(body);

                fs.writeFile("data.json", JSON.stringify(fileData, null, 4), (err) => {
                    if (err) throw err;
                });

                res(body);
            });
        });
    }
}

module.exports = new UsersServices();