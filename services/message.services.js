const fs = require('fs');
class MessageService{
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
}

module.exports = new MessageService();