// document.getElementById('calcButton').addEventListener('Click', loadPrice);

// function loadPrice () {
//     let xhr = new XMLHttpRequest();
    
//     xhr.open('GET', 'https://coinlib.io/api/v1/coin?key=9b79bb5181f4b204', true)
    
//     xhr.onload = () => {
//         if (this.status == 200) {
//             let data = JSON.parse(this.responseText);
    
//             console.log('this part is connected');

//         }
//     }

//     xhr.send();
// }

// const socket = io();
/*==== live cryptocurrency calculator =====*/
var ember = [];
var usdInput = document.getElementById('amtUSD');
var btcInput = document.getElementById('amtBTC');

ember.btcPrice = 17652.995;
// ember.socket = io.connect('https://socket.coincap.io');
// const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin')

//     pricesWs.onmessage = function (msg) {
//         console.log(msg.data)
//     }
ember.socket.on('trades', function(data) {
    var amt = document.getElementById('amtUSD');
    if (data.coin == 'BTC') {
        ember.amtUSD = usdInput.value;
        ember.amtBTC = btcInput.value;
        ember.usdCalc = ember.amtBTC * data.msg.price;
        if(data.msg.price > amt.value) {
            $(amt).addClass('increment');
        } else {
            $(amt).addClass('decrement');
        }
        $('#amtUSD').attr('value', ember.usdCalc);
        setTimeout(function () {
            $(amt).removeClass('increment decrement');
        }, 700);
    }
});

$('#amtBTC').bind('change paste keyup', function() {
    ember.usdCalc = $(this).val() * ember.btcPrice;
    $('#amtUSD').attr('value', ember.usdCalc);
});


