var name_Duck, riddleOneUser, riddleTwoUser;
var event_Duck = ['start', 'class', 'wake', 'yesQuest', 'noQuest', 'wood', 'cave', 'village', 'drunkard', 'preist', 'pitFall', 'trollRiddleOne', 'trollRiddleTwo', 'splitTwo', 'snake', 'caveIn', 'freedom']	//div ids

function submit(x, y) {
  name_Duck = document.getElementById('name').value; //gets user input for name_Duck value
  riddleOneUser = document.getElementById('riddleOneUser').value; //gets user input for riddle One 
  riddleTwoUser = document.getElementById('riddleTwoUser').value; //gets user input for riddle Two 
  if (x == 0 && name_Duck !== '') { //if div id equals start and name_Duck input is filled out, continue 
    main(x, y); 
    document.getElementById('nameOutput').innerHTML = name_Duck; //replaces span with id name_DuckOtput with the inputed name_Duck 
  } else if (riddleOneUser.toLowerCase() == 'two') { //if div id is trollRiddleTwo and user input equals two
    main(x, y);
  } else if (riddleTwoUser.toLowerCase() == 'egg') { //if div id is trollRiddleTwo and user input equals egg
    main(x, y);
  } else { //if answers are all wrong, hide current page and go back to start div, restarting the game
    main(x, 0);
  }
}

function main(x, y) { //hides and shows different div tags
  var x = document.getElementById(event_Duck[x]); //uses x yo git div id from the array event_Ducks
  x.style.display = "none"; //uses css to hide selected div by id

  var y = document.getElementById(event_Duck[y]);  //uses y yo git div id from the array event_Ducks
  y.style.display = "block"; //uses css to show selected div by id
}