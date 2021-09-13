var cars = ['Chevy', 'Ford', 'Saab', 'Yugo'];
document.getElementById('response').innerHTML = cars[2];
cars[2]= 'Dodge';
document.getElementById('response').innerHTML = cars[2];
document.getElementById('response1').innerHTML = cars;


var person = {
    firstName: 'Bob',
    lastName: 'The Builder',
    age: 40,
    height: 3
}

document.getElementById('objects').innerHTML = person.firstName;