const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();

//passport config
require('./config/passport')(passport)

mongoose.connect('mongodb://localhost:27017/academy', { useNewUrlParser: true })
app.use(expressLayouts)
    //EJS
app.set('view engine', 'ejs')
    //Body Parser
app.use(express.urlencoded({ extended: false }))

//express session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true

}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
//connect flash
app.use(flash())

//global vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('_msg');
    res.locals.error_msg = req.flash('_msg');
    res.locals.error = req.flash('error')
    next();
})

//routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

app.listen(5000, () => {
    console.log('server started on port 5000')
})