
//#1

function Dog(){
    this.name = 'Mozzy';
    this.colour = 'White';
    this.numLegs = 4;
};

function Bird(){
    this.name = 'Albert';
    this.colour = 'blue';
    this.numLegs = 2;
};

let blueBird = new Bird();
blueBird.name = 'Elvira';

//#2

let swan = new Bird();
swan.name = 'Carlos';
swan.color = 'white';

let cardinal = new Bird();
cardinal.name = 'Bruce';
cardinal.color = 'red';
cardinal.numLegs = 2;

let hound = new Dog();
hound.name = 'Hound';
hound.color = 'black';
hound.numLegs = 4;

//#3

function Dog(name, color){
    this.name = name;
    this.colour = color;
    this.numLegs = 4;
};

function Bird(name, color){
    this.name = name;
    this.colour = color;
    this.numLegs = 2;
};

let canary = {
    name: 'Mildred',
    color: 'yellow',
    numLegs:2
};

//#4

function Dog(ownersName, dogsName, color){
    this.ownersName = ownersName;
    this.dogsName = dogsName;
    this.color = color;
    this.numLegs = 4;
};

var terrier = new Dog('Bob', 'Fluffy', 'Brown');
var retriver = new Dog('Michael', 'Chloe', 'Tan');

console.log([terrier.ownersName, 'has a', terrier.color,'dog named', terrier.dogsName].join(' '));
console.log([retriver.ownersName, 'has a', retriver.color,'dog named', retriver.dogsName].join(' '));