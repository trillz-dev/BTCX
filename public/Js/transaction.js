// const connectDB = require('./config/db');
// // Connect Mongoose
// connectDB();
// const User = require('../../Models/User');

// User.findById({_id: req.user.id})
// .then(user => {
//     if(user) {
//         console.log(user)
//     }
// })
// console.log(User);

// SELECT ELEMENTS
const currBalance = document.querySelector(".curr-balance");
const withdrawList = document.querySelector("#withdraw .list");
const depositList = document.querySelector("#deposit .list");

// INPUT BTS
const addDeposit = document.querySelector(".add-deposit");
const depositTitle = document.getElementById("deposit-title-input");
const depositAmount = document.getElementById("deposit-amount-input");

const addWithdraw = document.querySelector(".add-withdraw");
const withdrawTitle = document.getElementById("withdraw-title-input");
const withdrawAmount = document.getElementById("withdraw-amount-input");

// VARIABLES
let ENTRY_LIST;
let balance = 0, deposit = 0, withdraw = 0;
const DELETE = "delete", EDIT = "edit";

// LOOK IF THERE IS SAVED DATA IN LOCALSTORAGE
ENTRY_LIST = JSON.parse(localStorage.getItem("entry_list")) || [];
updateUI();


addDeposit.addEventListener("click", function(){
    // IF ONE OF THE INPUTS IS EMPTY => EXIT
    if(!depositTitle.value || !depositAmount.value ) return;

    // SAVE THE ENTRY TO ENTRY_LIST
    let deposit = {
        type : depositTitle.value,
        amount : parseInt(depositAmount.value)
    }
    ENTRY_LIST.push(deposit);

    updateUI();
    clearInput( [expenseTitle, expenseAmount] )
})

addWithdraw.addEventListener("click", function(){
    // IF ONE OF THE INPUTS IS EMPTY => EXIT
    if(!withdrawTitle.value || !withdrawAmount.value ) return;

    // SAVE THE ENTRY TO ENTRY_LIST
    let withdraw = {
        type : incomeTitle.value,
        amount : parseInt(withdrawAmount.value)
    }
    ENTRY_LIST.push(withdraw);

    updateUI();
    clearInput( [withdrawTitle, withdrawAmount] )
})


function updateUI(){
    withdraw = calculateTotal("withdraw", ENTRY_LIST);
    deposit = calculateTotal("deposit", ENTRY_LIST);
    balance = Math.abs(calculateBalance(deposit, withdraw));

    // DETERMINE SIGN OF BALANCE
    let sign = (deposit >= withdraw) ? "$" : "-$";

    // UPDATE UI
    currBalance.innerHTML = `<small>${sign}</small>${balance}`;
    // outcomeTotalEl.innerHTML = `<small>$</small>${outcome}`;
    // incomeTotalEl.innerHTML = `<small>$</small>${income}`;

    clearElement( [depositList, withdrawList] );

    ENTRY_LIST.forEach( (entry, index) => {
        if( entry.type == "deposit" ){
            showEntry(depositList, entry.type, entry.amount, index)
        }else if( entry.type == "withdraw" ){
            showEntry(withdrawList, entry.type, entry.amount, index)
        }
        showEntry(allList, entry.type, entry.title, entry.amount, index)
    });

    localStorage.setItem("entry_list", JSON.stringify(ENTRY_LIST));
}

function showEntry(list, type, title, amount, id){

    const entry = ` <th scope="row">"${id}"</th>
                    <td>"${type}"</td>
                    <td>"${title}"</td>
                    <td>"${amount}"</td>
                    <td></td> `;

    const position = "afterbegin";

    list.insertAdjacentHTML(position, entry);
}

function clearElement(elements){
    elements.forEach( element => {
        element.innerHTML = "";
    })
}

function calculateTotal(type, list){
    let sum = 0;

    list.forEach( entry => {
        if( entry.type == type ){
            sum += entry.amount;
        }
    })

    return sum;
}

function calculateBalance(income, outcome){
    return income - outcome;
}

function clearInput(inputs){
    inputs.forEach( input => {
        input.value = "";
    })
}
