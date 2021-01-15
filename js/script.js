function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

var min = 1;
var max = 20;
var computerRandomNumbers = [];

while(computerRandomNumbers.length < 5) {
  var random = randomNumber(min, max);
  if(!computerRandomNumbers.includes(random)) {
    computerRandomNumbers.push(random);
  }
}

console.log(computerRandomNumbers);

alert('I numeri generati dal Computer sono:  ' + computerRandomNumbers);

var userNumbers = [];
var rightNumbers = [];

var countdown = document.getElementById('countdown');
var secondsNum = 30;

var timeFunction = setInterval(function() {

  secondsNum--;
  countdown.innerText = secondsNum;

  if(secondsNum === 0) {
    setTimeout(function () {

    while(userNumbers.length < 5) {

      var user = parseInt(prompt('Inserisci numero'));
      if(isNaN(user) || user < min || user > max) {
        alert('Inserisci un numero compreso tra ' + min + ' e ' + max);
      } else if(userNumbers.includes(user)) {
        alert('Non puoi inserire lo stesso numero');
      } else {
        userNumbers.push(user);
      }
      if(computerRandomNumbers.includes(user)) {
        rightNumbers.push(user);
      }
    }

      var results = document.getElementById('results');
      results.innerText = 'Hai indovinato ' + rightNumbers.length + ' numeri. I numeri del Computer erano ' + computerRandomNumbers + ' e i numeri che hai indovinato tu sono: ' + rightNumbers;

  }, 50);
    clearInterval(timeFunction);
  }

}, 1000);
