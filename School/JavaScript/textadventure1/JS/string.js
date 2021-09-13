//#region variables
var text;
var userChoice;
var win;
var error = 'wrong answer mx. employee, restarteru!';

//#endregion

//#region start
function start(){
    text = 'Pick your profession \n(1)manual labor \r(2)office worker';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            employee();
            break;
        case '2':
            employee();
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }
    
}

//#endregion

//#region class

//0
function employee(){
    text = 'Once again your in the middle of working when your boss pulls you aside and gives you even more to do. \rTired of not only his shit, but all of Capitalisms you: \r(1)Cuss out your boss \r(2)Walk out \r(3)Get back to work, putting aside your anger.';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            cuss();
            break;
        case '2':
            walkOut()
            break;
        case '3':
            work()
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }
}

//#endregion

//#region 1

//1
function cuss(){
    text = 'you cuss out your boss, how loud do you speak? \r(1)quietly \r(2)loudly';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            deaf();
            break;
        case '2':
            fired()
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }
}

//1.1
function deaf(){
    text = 'the boss didnt hear you, you have a couple of options, you could (1)Stay and Work or (2) Walk out.';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            stay();
            break;
        case '2':
            walkOut();
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }
}

//1.2
function fired(){
    text = 'Your boss fires you, on hearing such vulgar language. He comands that you leaest once, threatening to vall security. \rwhat do you do? \r(1)stay outa spite \r(2)walk out';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            spite();
            break;
        case '2':
            walkOut()
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }
}

//1.1.1
function stay(){
    text='you failed to escape the capitalistic society.'
    alert(text)
}

//1.2.1
function spite(){
    text = 'you stayed out of spite for him,, he called security. \rWhat will you do? \r(1)fight security \r(2)cooperate?';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            fight();
            break;
        case '2':
            cooperate();
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }
}

//1.2.1.1
function fight(){
    text = 'You attempted to fight the security guard,,, sadly  today is not the day to awaken your inner fighting spirit. you lost,, horribly,,, youre now bleeding out on the floor.';
    win = 'Good job you have found the Police Brutality ending, you escaped this capitalistic world, good luck on your journey after death. congrats!!!';
    alert(text);
    alert(win);
}

//1.2.1.2
function cooperate(){
    text = 'you chose to cooperate with the police officer, he escorted you out of the building.';
    alert(text);
    walkOut();
}
//#endregion

//#region 2

//2
function walkOut(){
    text = 'Unhappy with your previous employment you tell yourself, fuck that place, im leaving. and you up n walk out.\rdo you wanna (1) find a new job or would you rather just (2) go home for a bit?';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            newJob();
            break;
        case '2':
            drive()
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }

}

//2.1
function newJob(){
    text = 'You find a job that youd be intrested in and apply, you get interviewed, a few weeks pass, you get a phone call! youre hired congrats on the new job!!! Sadly you failled to escape capitalism, rather choosing to fuel the system more.';
    alert(text);
}

//2.2
function drive(){
    text = 'After a short drive you arrive at your flat unharmed. You think bout how you can escape the system beforte contemplating (1) reading up more on the subject or just (2) figuring it out as it goes?';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            study();
            break;
        case '2':
            leave()
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }

}

//2.2.1
function study(){
    text = 'you read up on methods and ways to live off the grid. you rerach for book 3 on gardening, its verry dusty. you open the book and out comes a moth, it bites you, AND SUDENTLY YOU START TRANSFORMING! Sudently what was you origonal, bland, self has transformed with the help of a regular moth into,,,, M O T H M A N';
    win = 'as is general knowledge MOTHMAN doesnt pay taxes or give into capitalistic ideas, with your new found form and knowledge you end up living off the grid on your own. CONGRATS you unlocked the MOTHMAN Ending! You sucessfully escaped capitalism, nice work!'
   alert(text);
   alert(win);
}

//2.2.2
function leave(){
    text = 'you start walking out of your flat, you reach the bottom floor what ride do you take?\r(1)Buss\r(2)Drive yourself';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            buss();
            break;
        case '2':
            car()
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }
}

//2.2.2.1
function buss(){
    text = 'you stand by the buss stop waiting for the buss. sudently from over the hill speeds the buss, it spins out of control, it hits you. you die on impact'
    win = 'Congrats the you sucessfully escaped, you were no match for that buss. good luck on the whole after life thing,, Anyway you unlocked the Buss Husband Ending!'
    alert(text)
    alert(win)
}

//2.2.2.2
function car(){
    text = 'You hop in your car and start driving, bored you reach for your phone, but it turns out you left it at ylur flat. in frustration you question putting on music. (1)yes music (2) no music';
    var userChoice = prompt(text);
    switch(userChoice){
        case '1':
            yes();
            break;
        case '2':
            no()
            break;
        default:
            if (userChoice === null) {
                return;
            }
            alert(error);
            start();
            break;
    }

}

//2.2.2.2.1.2
function yes(){
    text = 'you turn on the radio and crank it up top highest setting in frustration. distracted by the music you accidently wreck your car. lucky fot you, you survive and are rushed to the hospital. a month passes and youre doing relatively better, unable to drive you give up on your dream of escape and settle for a nice life of cheap ramen and video games while you await injurys to heal. unlucky for you, you may be at peace for now but you didnt suceed in escaping capitalist, goal failed.';
    alert(text);
}

//2.2.2.2.1.1
function no(){
    text = 'put of boredom you start to doze off at the wheel, befoere you know it you hear a loud thump and realize you just nailed your old boss with a car. scared you drive away, you get pulled over fpr speeding and charged with murder, youre sent to prison for life.';
    win = 'you escaped capitalism, prisoners dont make mopney or have taxes. therefor youre just benifitting off others. congrats! you found the Prisoner Ending.'
    alert(text);

}
//#endregion

//3
function work(){
    alert('you go back to work, to escape anouther day');
    employee();
}

