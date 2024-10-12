class User {
    constructor(name, lastname, email) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }
}

const users = [];

const save = (user) => {
    users.push(user);
}

const findAll = () => {
    return users;
}

module.exports = {
    User,
    save,
    findAll
    
};