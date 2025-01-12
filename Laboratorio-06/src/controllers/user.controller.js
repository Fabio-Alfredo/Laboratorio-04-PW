const {addNewUser, getAllUsers} = require('../services/user.service');

const addUserController = (req, res)=>{
    try{
        const {name, lastname, email} = req.body;
        addNewUser(name, lastname, email)
        res.render('home.pug', {user:{name, lastname, email}, users: getAllUsers()});

    }catch(e){
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
}

const showForm = (req, res) => {
    res.render('form.pug');
    
}


module.exports={
    addUserController,
    showForm
}