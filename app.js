const express = require('express');
const edge = require('edge.js')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const homepagecontroller = require('./controllers/homepagecontroller')
const registerController = require('./controllers/registerPageController')
const loginPageController = require('./controllers/loginPageController')
const registratioController = require('./controllers/registrationController')
const dashboardPageController = require('./controllers/dashboardPageController')
const staffloginPageController = require('./controllers/staffloginPageController')
const paydelcontroller = require('./controllers/paymentdelete')
const loginController = require('./controllers/loginController')
const stafflogincontroller = require('./controllers/stafflogincontroller')
const staffRegisterpageController = require('./controllers/staffRegisterpageController')
const staffRegistrationController = require('./controllers/staffRegistration')
const adminPageController = require('./controllers/adminPageController')
const accountPageController = require('./controllers/accountPageController')
const deleteController = require('./controllers/deleteController')
const userdeleteController = require('./controllers/userdeleteController')
const deleterequestController = require('./controllers/deleterequestController')
const requestApproveController = require('./controllers/requestApproveController')
const requestDeclineController = require('./controllers/requestDeclineController')
const paymentPageController = require('./controllers/paymentPageController')
const deletemessageController = require('./controllers/deletemessageController')
const paymentController = require('./controllers/paymentController')
const paymentDeleteController = require('./controllers/paymentDeleteController')
const printrecieptPagecontroller = require('./controllers/printrecieptPagecontroller')
const inventoryPageController = require('./controllers/inventoryPageController')
const updateshipmentcontroller = require('./controllers/updateshipmentcontroller')
const priceupdateController = require('./controllers/priceupdateController')
const updateStaffController = require('./controllers/updateStaffController')
const updatestaffpasswordController = require('./controllers/updatestaffpassword')
const tryoutcontroller = require('./controllers/tryoutcontroller')
const auth = require('./config/auth')
const testcontroller = require('./controllers/testcontroller')
const adminAuth = require('./config/adminAuth')
const redirectIfAuthenticated = require('./config/redirectifAuthenticated')
const shipmentRequestController = require('./controllers/shipmentRequest')
const updateUserController = require('./controllers/updateUserController')
const logoutController = require('./controllers/logoutcontroller')
const app = express();

mongoose.connect('mongodb://localhost:27017/ship', { useNewUrlParser: true })
app.use(expressLayouts)
    //EJS
app.set('view engine', 'ejs')
    //Body Parser
app.use(flash())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
    //express session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true

}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

const WebScocket = require('WebSocket')

const connection = new WebSocket('/')


//routes
app.get('/', homepagecontroller)
app.get('/register', redirectIfAuthenticated, registerController)
app.get('/login', redirectIfAuthenticated, loginPageController)
app.post('/login', loginController)
app.get('/logout', logoutController)
app.get('/delete/:id', deleteController)
app.get('/userdelete/:id', adminAuth, userdeleteController)
app.get('/deleterequest/:id', deleterequestController)
app.get('/paymentdelete/:id', paymentDeleteController)
app.get('/requestapprove/:identity/:id', adminAuth, requestApproveController)
app.get('/requestdecline/:id', adminAuth, requestDeclineController)
app.get('/inventory', adminAuth, inventoryPageController)
app.get('/paydel/:id', paydelcontroller)
app.get('/tryout', tryoutcontroller)
app.get('/test', testcontroller)

app.get('/reciept/:id', printrecieptPagecontroller)
app.get('/deletemessage/:id', deletemessageController)
app.get('/payment/:id/:shipmentid/:messageid', paymentPageController)
app.get('/payment', paymentPageController)
app.get('/stafflogin', staffloginPageController)
app.post('/stafflogin', stafflogincontroller)
app.get('/registerstaff', adminAuth, staffRegisterpageController)
app.post('/staffregistration', adminAuth, staffRegistrationController)
app.get('/admin', adminAuth, adminPageController)
app.get('/account', adminAuth, accountPageController)
app.get('/dashboard', auth, dashboardPageController)
app.post('/register', registratioController)
app.post('/shiprequest', shipmentRequestController)
app.post('/updateuser', updateUserController)
app.post('/payment', paymentController)
app.post('/updateshipment/:id', updateshipmentcontroller)
app.post('/priceupdate', adminAuth, priceupdateController)
app.post('/updatestaff', adminAuth, updateStaffController)
app.post('/updatestaffpassword', updatestaffpasswordController)


app.listen(5000, () => {
    console.log('server started on port 5000')
})