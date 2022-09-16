/*-----login btn control-----------*/

const loginBtn = document.getElementById('login-btn');
const loginBox = document.getElementById('login-box');
const trBox = document.getElementById('transaction-box');
loginBtn.addEventListener("click", function(){
    loginBox.classList.add("close");
    trBox.classList.add("open");
});

/*-------function for transaction---------*/
function getInputNumber(id){
    const inputAmount = document.getElementById(id).value;
    const inputNumber = parseFloat(inputAmount);
    return inputNumber;

}
function updateValue(id, inputNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total= inputNumber + currentNumber;
    document.getElementById(id).innerText = total;
};


// transaction btn handeler

// ---------deposit btn-------------
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener("click", function(){
    const inputNumber = getInputNumber("deposit-amount");

    updateValue("deposit-total", inputNumber);
    document.getElementById('deposit-amount').value = "";
    updateValue("balance-total", inputNumber);

});

// ----------withdraw btn-----------
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener("click", function(){
    const inputNumber = getInputNumber("withdraw-amount");
    updateValue("withdraw-total", inputNumber);

    document.getElementById('withdraw-amount').value = "";

    updateValue("balance-total", -1 * inputNumber);
});
