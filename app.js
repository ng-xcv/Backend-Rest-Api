const express = require('express')
const app = express();

const mongoose = require('mongoose')
require ('dotenv').config()

const User =  require('./model/user')
// Middleware 
/* const customMiddleware = (req, res, next) => {
    console.log('Welcome to my middleware')
    next();
}
app.use(customMiddleware); */

//Needed to get data in theme
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome :)  ')
})

app.get('/users', (req, res) => {

    User.find({}, function (err, docs) {
        docs.forEach(element => {
            console.log(element.last_name)
        });
        res.send(docs)
    }); 
})

app.post('/create_user', async (req, res) => {
    try{
        const myuser = new User(req.body);
        console.log(req.body.first_name)
        await myuser.save();
        req.send(myuser)
    }catch(err){
        res.send({message : err})
    }
    //console.log(`User ${req.body.first_name} ${req.body.last_name} created `);
    //res.send("The user created is " + req.body.first_name + ' ' + req.body.last_name)
})

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true },
(req, res) => {
    console.log('Connected to the database')
});

app.listen(3000, () => {
    console.log('\nServer is listening to 3000')
})