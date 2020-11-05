const fs = require('fs');
class MessageServices{
    getMessages(){
        return new Promise((res, rej) => {
            fs.readFile('data.json', 'utf8', (err, data) => {
                if (err) throw err;
                res(JSON.parse(data).messages);
            });
        });
    }

    getMessageById(id){
        return new Promise((res, rej) => {
            fs.readFile('data.json', 'utf8', (err, data) =>{
                if (err) throw err;
                let messages = JSON.parse(data).messages;
                let message = messages.find((item) => item.id == id);
                res(message);
            });
        });
    }

    addMessage(body){
        return new Promise((res, rej) => {
            fs.readFile('data.json', (err, data) => {
                if (err) throw err;

                let fileData = JSON.parse(data);
                let messages = fileData.messages;
                messages.push(body);

                fs.writeFile("data.json", JSON.stringify(fileData, null, 4), (err) => {
                    if (err) throw err;
                });

                res('Message Added');
            });
        });
    }

    editMessage(id, body){
        return new Promise((res, rej) => {
            fs.readFile('data.json', (err, data) => {
                if (err) throw err;

                let fileData = JSON.parse(data);
                let messages = fileData.messages;
                messages.find((item, index) => {
                    if (id == item.id){
                        messages[index] = body;
                    }
                });

                fs.writeFile("data.json", JSON.stringify(fileData, null, 4), (err) => {
                    if (err) throw err;
                });

                res('Message Edited');
            });
        });
    }

    deleteMessage(id){
        return new Promise((res, rej) => {
            fs.readFile('data.json', (err, data) => {
                if (err) throw err;

                let fileData = JSON.parse(data);
                let messages = fileData.messages;
                messages.forEach((item, index) => {
                    if (id == item.id){
                        messages.splice(index, 1);
                    };
                });

                fs.writeFile("data.json", JSON.stringify(fileData, null, 4), (err) => {
                    if (err) throw err;
                });

                res('Message Delete');
            });
        });
    }
}



module.exports = new MessageServices();