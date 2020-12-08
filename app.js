
const path = require("path");
const express = require('express');
const bodyParser = require("body-parser");
const ejs = require('ejs');
const dotenv = require('dotenv')

const app = express();

app.set('view engine', 'ejs');
app.set('views');
app.use(express.static(path.join(__dirname)));

app.use(bodyParser.urlencoded({
    extended: true
}));

//Load config
dotenv.config({ path: './config/config.env'});


//Routes
const mainsiteRoutes = require('./routes/mainsite');
const dashboardRoutes = require('./routes/dashboard');

app.use(mainsiteRoutes);
app.use(dashboardRoutes);




const PORT = process.env.PORT || 3000

app.listen(PORT, function() {
    console.log('server is running on port 3000.')
});