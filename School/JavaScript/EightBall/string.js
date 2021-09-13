var userName = 'Sage';
if ( userName != '' ){
  console.log(['Hello,', userName, '!'].join(' '));
} else {
  console.log('Hello!');
}
var userQuestion = 'How many wheels of cheeee does it take to reconstruct a 401:3 replica of the Hoover Dam?';
console.log([userName, 'asks:', userQuestion].join(' '));
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';
if (randomNumber == 0){
  eightBall = 'It is certain';
} else if (randomNumber == 1){
  eightBall = 'Signs point to yes';
} else if (randomNumber == 2){
  eightBall = 'It is decidedly so';
} else if (randomNumber == 3){
  eightBall = 'Reply hazy try again';
} else if (randomNumber == 4){
  eightBall = 'Cannot predict now';
} else if (randomNumber == 5){
  eightBall = 'Do not count on it';
} else if (randomNumber == 6){
  eightBall = 'My sources say no';
} else if (randomNumber == 7){
  eightBall = 'Outlook not so good';
} 
console.log(eightBall);
