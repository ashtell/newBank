// starting gui version now
/** global swal **/
function makeNewAccount(name) {
    var newName = name.toLowerCase();                                   //make sure there are no duplicate accounts
    var accountName = newName + "account";                              // make a new account string
    var accountNumber = newName + "number";                             // make a new account number
    var num = Math.random() * (99999) + 1;                              //make a number
    var Rnum = num.toFixed(0);                                          //set number
    localStorage.setItem(accountName, 0);                               // make account
    localStorage.setItem(accountNumber, Rnum);

}

function deposit() {
    var number = document.getElementById("number").innerHTML;           //find value of amount deposited
    var name = document.getElementById("name").innerHTML;               //find value of name
    var Lname = name.toLowerCase();
    var account = Lname + "account";
    var accountN = Lname + "number"
    if (localStorage.getItem(account) === null) {                       //if name isn't found make new account
        swal('Error', 'User Not Defined', 'error');                     //Shout No!
    }
    var oldBalance = parseInt(localStorage.getItem(account));
    var newBalance = parseInt(number) + oldBalance;
    localStorage.setItem(account, newBalance);
    document.getElementById("balance").innerHTML = "$" + localStorage.getItem(account);
    document.getElementById("idn").innerHTML = localStorage.getItem(accountN);
}

function withdrawl() {
    var number = document.getElementById("number").innerHTML;           //find value of amount deposited
    var name = document.getElementById("name").innerHTML;               //find value of name
    var Lname = name.toLowerCase();
    var account = Lname + "account";
    var accountN = Lname + "number";
    if (localStorage.getItem(account) === null) {                       //if name isn't found make new account
        swal('Error', 'User Not Defined', 'error');                     //Shout No!
    }
    var oldBalance = parseInt(localStorage.getItem(account));
    var newBalance = oldBalance - parseInt(number);
    if (newBalance < 0) {
        document.getElementById("balance").innerHTML = "INSUFF. FUNDS";
    } else {
        localStorage.setItem(account, newBalance);
        document.getElementById("balance").innerHTML = "$" + localStorage.getItem(account);
        document.getElementById("idn").innerHTML = localStorage.getItem(accountN);
    }

}

function lookUp() {
    var name = document.getElementById("lookup").innerHTML;             //find value of name
    var Lname = name.toLowerCase();
    var account = Lname + "account";
    var accountN = Lname + "number";
    if (localStorage.getItem(account) === null) {                       //if name isn't found make new account
        sweetAlert('Error', 'User Not Defined', 'error');                     //Shout No!
    }
    document.getElementById("balance").innerHTML = "$" + localStorage.getItem(account);
    document.getElementById("idn").innerHTML = localStorage.getItem(accountN);
    document.getElementById("name").innerHTML = document.getElementById("lookup").innerHTML;
}
// function displayValue(name, value) {
//     document.getElementById("balance").innerHTML = value; //display number of dollars
//     if ((localStorage.getItem(name + "number")) === null) { //see if they have an account number
//         var num = Math.random() * (99999) + 1; //if they don't, make a number
//         localStorage.setItem((name + "number"), num.toFixed(0)); //set number
//     }
//     document.getElementById("idn").innerHTML = localStorage.getItem(name + "number"); //display number

// }