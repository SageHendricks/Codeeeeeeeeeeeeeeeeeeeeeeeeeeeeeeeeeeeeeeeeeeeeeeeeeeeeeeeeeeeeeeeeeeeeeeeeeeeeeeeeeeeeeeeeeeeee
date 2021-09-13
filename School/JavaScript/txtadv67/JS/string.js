var name;
var pAtk;
var pHP

function reset() {
  location.reload();
}

function start() {
  name = document.getElementById('name').value;
  if (name !== '') {

    var x = document.getElementById('start');
    x.style.display = "none";

    var y = document.getElementById('class');
    y.style.display = "block";

    document.getElementById('welcome').innerHTML = 'Hello ' + name + '! Welcome to the game, please pick a class!';
  }
}

function archer() {
  var x = document.getElementById('class');
  x.style.display = "none";

  var y = document.getElementById('wake');
  y.style.display = "block";

  pAtk = 15;
  pHP = 80;
}

function fighter() {
  var x = document.getElementById('class');
  x.style.display = "none";

  var y = document.getElementById('wake');
  y.style.display = "block";

  pAtk = 10;
  pHP = 100;
}

function rogue() {
  var x = document.getElementById('class');
  x.style.display = "none";

  var y = document.getElementById('wake');
  y.style.display = "block";

  pAtk = 20;
  pHP = 60;
}

function yesQuest() {
  var x = document.getElementById('wake');
  x.style.display = "none";

  var y = document.getElementById('yesQuest');
  y.style.display = "block";
}

function noQuest() {
  var x = document.getElementById('wake');
  x.style.display = "none";

  var y = document.getElementById('noQuest');
  y.style.display = "block";
}

function wood(){
  var x = document.getElementById('yesQuest');
  x.style.display = "none";

  var y = document.getElementById('wood');
  y.style.display = "block";
}

function cave(){
  var x = document.getElementById('yesQuest');
  x.style.display = "none";

  var y = document.getElementById('cave');
  y.style.display = "block";
}

function village(){
  var x = document.getElementById('yesQuest');
  x.style.display = "none";

  var y = document.getElementById('village');
  y.style.display = "block";
}

function drunkard(){
    var x = document.getElementById('village');
    x.style.display = "none";
  
    var y = document.getElementById('drunkard');
    y.style.display = "block";
}

  function preist(){
    var x = document.getElementById('village');
    x.style.display = "none";
  
    var y = document.getElementById('preist');
    y.style.display = "block";
    cave()
}

  function village(){
    var x = document.getElementById('village');
    x.style.display = "none";
  
    var y = document.getElementById('wake');
    y.style.display = "block";
}

  function village(){
    var x = document.getElementById('village');
    x.style.display = "none";
  
    var y = document.getElementById('wake');
    y.style.display = "block";
}