const UsersServices = require('../services/users.services');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRound = 10;
class UsersControllers{
    async getUsers(){
        let users = await UsersServices.getUsers();
        return users;
    }

    async registerUser(body){
        const { id, firstName, lastName, email, password } = body;
        const users = await UsersServices.getUsers();
        const emailSearchResult = users.find((e) => {
            return e.email === email; // return email or underfind
        });

        if (!emailSearchResult){
            // hash, addUser and return user
            const hashedPassword = await bcrypt.hash(password, saltRound);
            const user = await UsersServices.addUser({
                id: ++users.length,
                firstName,
                lastName,
                email,
                password: hashedPassword
            });
            return user;
        }
        else {
            return `This ${email} address is already being used`;
        }
    }

    async loginUser(body){
        const {email, password} = body;
        const user = await UsersServices.getUser(email);
        if(user){
            const compareUser = await bcrypt.compare(password, user.password);
            if(compareUser){
                const token = jwt.sign({
                    id: user.id,
                    email: user.email
                }, process.env.ACCESS_TOKEN_SECRET);
                return token;
            }
            else {
                return `Bad password`;
            }
        } 
        else {
            return `This user doesn't exist`;
        }
    }
}

module.exports = new UsersControllers();