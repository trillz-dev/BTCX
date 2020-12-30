
const path = require('path');
const express = require('express');
const http = require('http');
const connectDB = require('./config/db');
const socketio = require('socket.io');
const bodyParser = require("body-parser");
const ejs = require('ejs');
const dotenv = require('dotenv')
const request = require('request');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport')


const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.set('view engine', 'ejs');
app.set('views');
app.use(express.static(path.join(__dirname)));

app.use(bodyParser.urlencoded({
    extended: true
}));

//Load config
dotenv.config({ path: './config/config.env'});

// Passport config
require('./config/passport')(passport);

// Connect Mongoose
connectDB();

// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//  Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global Vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Run when clients connects
io.on('connection', socket => {
    console.log('New WS connection...')
});


//Routes
const mainsiteRoutes = require('./routes/mainsite');
const dashboardRoutes = require('./routes/dashboard');
const usersRoutes = require('./routes/users');

app.use(mainsiteRoutes);
app.use(dashboardRoutes);
app.use(usersRoutes);




const PORT = process.env.PORT || 3000

server.listen(PORT, function() {
    console.log('server is running on port 3000.')
});