
const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const bodyParser = require("body-parser");
const ejs = require('ejs');
const dotenv = require('dotenv')
const request = require('request');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.set('view engine', 'ejs');
app.set('views');
app.use(express.static(path.join(__dirname)));

app.use(bodyParser.urlencoded({
    extended: true
}));

// Run when clients connects
io.on('connection', socket => {
    console.log('New WS connection...')

    socket.onAny('connect', () => {
        request('https://coinlib.io/api/v1/coinlist?key=9b79bb5181f4b204', (error, response, body) => {
            
            let data = JSON.parse(body);
            let btcData = data.coins[0];
            let ETH = data.coins[1];
            let XRP = data.coins[2];
            let LTC = data.coins[3];

            let btcPrice = Math.round(btcData.price)
            // let btcFixed = Math.round(btcPrice)
            let btcMarket = btcData.market_cap
            let btc24 = btcData.volume_24h
            console.log (btcData)

        });

    });


    

})

//Load config
dotenv.config({ path: './config/config.env'});


//Routes
const mainsiteRoutes = require('./routes/mainsite');
const dashboardRoutes = require('./routes/dashboard');

app.use(mainsiteRoutes);
app.use(dashboardRoutes);




const PORT = process.env.PORT || 3000

server.listen(PORT, function() {
    console.log('server is running on port 3000.')
});