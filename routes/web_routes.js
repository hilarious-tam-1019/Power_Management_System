const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const bcrypt = require('bcryptjs');
const User = require('../model/user');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require("dotenv").config();

//using express
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}))


//configuring MongoDBstore
const store = new MongoDBStore ({
    uri: 'mongodb+srv://tam:funnytam1999@nodetuts.xgpsw.mongodb.net/user_info?retryWrites=true&w=majority',
    collection : 'sessions'
});

  
// Server setup
server.listen(3000, () => {
    console.log("Server listening on port 3000")
});

//session
app.use(session ({
        resave: false,
        saveUninitialized: false,
        secret: process.env.SECRET,
        store: store,
        cookie: {
            maxAge:1000 * 60 * 60 * 2
        }
}))

//middlewares

const redirectLogin = (req,res,next) => {
    if (!req.session.userId) {
        res.redirect('/login')
    } else {
        next()
    }
}

const redirectHome = (req,res,next) => {
    if (req.session.userId) {
        res.redirect('/home')
    } else {
        next()
    }
}

//routes


app.get('/', (req,res)=> {
    res.render('index', {title: 'Welcome to BK IOT'})
});

app.get('/home', redirectLogin,  (req,res) => {
    res.render('home', {title: 'Home'});
});
app.get('/about', (req,res) => {
    res.render('about', {title: 'About Us'})
})
app.get('/login', redirectHome,  (req,res)=> {
    
    res.render('login', {title: 'Log In'}); 
})
app.get('/signup',redirectHome , (req,res) => {

    res.render('signup', {title: 'Sign Up'});
});

//post login route
app.post('/login',redirectHome,  async (req,res) => {
    const { email, password} = req.body;

    const user = await User.findOne({ email }).lean();
    
    if(!user) {
        return res.json ({status:'error', error:'Invalid email/password'})
    }
    if(await bcrypt.compare(password, user.password)) {
        // email, password combination is succesful
        req.session.userId = user._id
        return res.json ({status:'ok', user: req.session.userId})
    }
    res.json({ status: 'error', error: 'Invalid username/password' }) 
})

//post signup route
app.post('/signup',redirectHome,  async (req, res) => {
    
    //check if the req.body is parse correctly
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        console.log('Object missing');
      }

    const { email, password: plainTextPassword } = req.body;

    if(!email || typeof email !== 'string') {
        return res.json({ status: 'error', error: 'Invalid email'});
    }

    if(!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password'});
    }

    if(plainTextPassword.length < 5) {
        return res.json({status: 'error', error: 'Password too small, should at least be 6 characters'});
    }

    const password = await bcrypt.hash(plainTextPassword, 10);

    try {
        const response = await User.create({
            email,
            password
        },
    )
        req.session.userId = response._id

        console.log ('User created succesfully: ', response);
    } catch (error) {
        if(error.name==='ValidationError') {
            return res.json({ status:'error', error: 'Invalid Email'})
        }

        if(error.code === 11000) {
            //duplicate key
            return res.json ({ status: 'error', error: 'Email already in use'});
        }
        throw error 
    }
    res.json({status: 'ok'});
});

//logout routes
app.post('/logout', (req,res) => {
    req.session.destroy(err =>{
        if(err) {
            return res.redirect('/home')
        }
        res.redirect('/login')
    })
})

// 404 page
app.use((req,res)=>{
    res.status(404).render('404', {title: '404'});
});

module.exports = app;