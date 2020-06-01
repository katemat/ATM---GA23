var insertBtn = document.querySelector('.insert-btn');
var cardIn = document.querySelector('.card-in');
var balance = document.querySelector('span');
var depositBtn = document.querySelector('.deposit-btn')
var withdrawBtn = document.querySelector('.withdraw-btn');
var checkBalanceBtn = document.querySelector('.check-balance-btn');
var userInput = document.querySelector('.user-input');
var confirmWithdrawBtn = document.querySelector('.confirm-withdraw-btn');
var confirmDepositBtn = document.querySelector('.confirm-deposit-btn');
var cashOut = document.querySelector('.cash-out');
var arrowGif = document.querySelector('.arrow-gif');
var message = document.querySelector('.message');
var balanceMessage = document.querySelector('.balance-message');
var removeCardBtn = document.querySelector('.remove-card-btn');
var returnBtn = document.querySelector('.return-btn');
var oneBtn = document.querySelector('.one-btn');
var twoBtn = document.querySelector('.two-btn');
var threeBtn = document.querySelector('.three-btn');
var fourBtn = document.querySelector('.four-btn');
var fiveBtn = document.querySelector('.five-btn');
var sixBtn = document.querySelector('.six-btn');
var sevenBtn = document.querySelector('.seven-btn');
var eightBtn = document.querySelector('.eight-btn');
var nineBtn = document.querySelector('.nine-btn');
var zeroBtn = document.querySelector('.zero-btn');
var clearBtn = document.querySelector('.clear-btn');
var enterBtn = document.querySelector('.enter-btn');
var cancelBtn = document.querySelector('.cancel-btn');
var infoBtn = document.querySelector('.info-btn');
var numPad = document.querySelector('.num-pad');
var actionBtn = document.querySelector('.action-btn');

var cashOutAudio = new Audio('sounds/cashOut.mp3')
//var isCashOut = false;
var currentBalance = 1000;
var amount;
var isDeposit = false;
var isWithdraw = false;
var numPadAudio = new Audio('sounds/beep.mp3');


var cardInside = function () {
  insertBtn.style.display = 'none';
  cardIn.src = 'images/card.JPG';
  insertBtn.style.backgroundColor = 'red';
  message.style.display = 'none';
  depositBtn.style.display = 'inherit';
  withdrawBtn.style.display = 'inherit';
  checkBalanceBtn.style.display = 'inherit';
  removeCardBtn.style.display = 'inherit';
  //infoBtn.style.pointerEvents = 'fill';
}

var depositFn = function () {
  isDeposit = true;
  numPad.style.pointerEvents = 'inherit';
  message.style.display = 'inherit';
  message.style.color = 'blue';
  message.textContent = 'Enter amount you want to deposit:';
  confirmDepositBtn.style.display = 'inherit';
  userInput.style.display = 'inherit';
  withdrawBtn.classList.add('disabled');
}

var returnToMain = function () {
  message.textContent = '';
  returnBtn.style.display = 'inherit';
  depositBtn.classList.remove('disabled');
  withdrawBtn.classList.remove('disabled');
  userInput.style.display = 'none';
  userInput.value = '';
  returnBtn.style.display = 'none';
  confirmDepositBtn.style.display = 'none';
  confirmWithdrawBtn.style.display = 'none';
}

var refreshPage = function () {
  window.location.reload();
}

var cashOutFn = function () {
  //isCashOut = true;
  // cashOutAudio.play;
  message.textContent = '';
  cashOut.src = 'images/cashOutEmpty.png';
  arrowGif.style.display = 'none';
  depositBtn.classList.remove('disabled');

  if (currentBalance > 0) {
    withdrawBtn.classList.remove('disabled');
  }
}

var confirmDeposit = function () {
  amount = Number(userInput.value)
  currentBalance += amount;

  if (currentBalance > 0) {
    balanceMessage.style.color = 'rgb(84, 5, 116)';
  }

  balance.textContent = Number(currentBalance);
  userInput.value = '';
  userInput.style.display = 'none';
  depositBtn.style.color = 'white';
  confirmDepositBtn.style.display = 'none';
  withdrawBtn.classList.remove('disabled');
  message.textContent = '';
  numPad.style.pointerEvents = 'none';
  isDeposit = false;
}

var withdrawFn = function () {
  isWithdraw = true;
  userInput.value = '';
  numPad.style.pointerEvents = 'inherit';
  message.style.display = 'inherit';
  message.style.color = 'blue';
  message.textContent = 'Enter amount you want to withdraw:';
  userInput.style.display = 'inherit';
  confirmWithdrawBtn.style.display = 'inherit';
  depositBtn.classList.add('disabled');
}


var withdrawOperation = function () {
  balance.textContent = Number(currentBalance);
  userInput.style.display = 'none';
  userInput.value = '';
  cashOut.src = 'images/cashOut.png'
  withdrawBtn.classList.add('disabled');
  arrowGif.style.display = 'inherit';
  confirmWithdrawBtn.style.display = 'none';
}

var confirmWithdraw = function () {
  amount = Number(userInput.value);
  var tempBalance = currentBalance - amount;

  if (tempBalance < 0) {
    message.style.display = 'inherit'
    message.textContent = 'Insufficient Funds. Enter smaller amount.';
    message.style.color = 'red',
      returnBtn.style.display = 'inherit';
    confirmWithdrawBtn.style.display = 'none';
    withdrawBtn.classList.add('disabled');
    userInput.style.display = 'none';
  }


  if (tempBalance > 0) {
    currentBalance = tempBalance;
    withdrawOperation();
    message.textContent = 'Please take your money';
  } else if (tempBalance === 0) {
    currentBalance = tempBalance;
    withdrawOperation();
    message.textContent = 'You have no money left on your account! Please take your money. ';
    message.style.display = 'inherit'
    balanceMessage.style.color = 'red';
  }
  numPad.style.pointerEvents = 'none';
  isWithdraw = false;
}

var displayBalance = function () {
  balanceMessage.style.display = 'inherit';
  balance.textContent = currentBalance;
  checkBalanceBtn.classList.add('disabled');
}


var inputOne = function () {
  numPadAudio.play();
  userInput.value += '1';
}
var inputTwo = function () {
  numPadAudio.play();
  userInput.value += '2';
}
var inputThree = function () {
  numPadAudio.play();
  userInput.value += '3';
}
var inputFour = function () {
  numPadAudio.play();
  userInput.value += '4';
}
var inputFive = function () {
  numPadAudio.play();
  userInput.value += '5';
}
var inputSix = function () {
  numPadAudio.play();
  userInput.value += '6';
}
var inputSeven = function () {
  numPadAudio.play();
  userInput.value += '7';
}
var inputEight = function () {
  numPadAudio.play();
  userInput.value += '8';
}
var inputNine = function () {
  numPadAudio.play();
  userInput.value += '9';
}
var inputZero = function () {
  numPadAudio.play();
  userInput.value += '0';
}

var confirmInput = function () {
  if (isDeposit) {
    message.textContent = `You are going to deposit \$${userInput.value}. Please confirm`;

  } else if (isWithdraw) {
    message.textContent = `You are going to withdraw \$${userInput.value}. Please confirm`;
  }
}

var infoView = function () {
  message.style.display = 'inherit';
  confirmDepositBtn.style.display = 'none';
  confirmWithdrawBtn.style.display = 'none';
  message.textContent = "Some important Info here :)";
  userInput.style.display = 'none';
  returnBtn.style.display = 'inherit';
}

var cancelInput = function () {
  returnToMain();
}

var clearInput = function () {
  userInput.value = (userInput.value).slice(0, -1);
}

insertBtn.addEventListener('click', cardInside);
depositBtn.addEventListener('click', depositFn);
withdrawBtn.addEventListener('click', withdrawFn);
confirmWithdrawBtn.addEventListener('click', confirmWithdraw);
confirmDepositBtn.addEventListener('click', confirmDeposit);
checkBalanceBtn.addEventListener('click', displayBalance);
cashOut.addEventListener('click', cashOutFn);
removeCardBtn.addEventListener('click', refreshPage);
returnBtn.addEventListener('click', returnToMain);

// num-pad events
clearBtn.addEventListener('click', clearInput);
infoBtn.addEventListener('click', infoView);
enterBtn.addEventListener('click', confirmInput);
cancelBtn.addEventListener('click', cancelInput);
oneBtn.addEventListener('click', inputOne);
twoBtn.addEventListener('click', inputTwo);
threeBtn.addEventListener('click', inputThree);
fourBtn.addEventListener('click', inputFour);
fiveBtn.addEventListener('click', inputFive);
sixBtn.addEventListener('click', inputSix);
sevenBtn.addEventListener('click', inputSeven);
eightBtn.addEventListener('click', inputEight);
nineBtn.addEventListener('click', inputNine);
zeroBtn.addEventListener('click', inputZero);

