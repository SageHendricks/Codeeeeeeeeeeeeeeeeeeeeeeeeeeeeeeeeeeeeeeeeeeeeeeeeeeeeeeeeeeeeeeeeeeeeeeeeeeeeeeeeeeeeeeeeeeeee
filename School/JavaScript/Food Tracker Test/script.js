/*var pear = {
    calorie:5,
};

function Batch(name){

    //adds new value to array 'calorieOne'
    var calorieOne = [0];
    calorieOne.push(name.calorie);

    //adds all integers in the array
    totalCalorie = calorieOne.reduce(function(calorieOne, secondValue) { return calorieOne + secondValue; }, 0);
};

Batch(pear);
Batch(pear);

console.log(totalCalorie);
//outputs 5

//I need it to output 10; Adding pear.calorie twice, 5 + 5 = 10
*/

const pear = {
    calorie: 5,
    carb: 5,
    protein: 5,
    fat: 5
};
const fruits = [pear, pear];
const totalCalories = fruits.reduce((m, v) => m + v.calorie, 0);
const totalCarbs = fruits.reduce((m, v) => m + v.carb, 0);
const totalProtein = fruits.reduce((m, v) => m + v.protein, 0);
const totalFat = fruits.reduce((m, v) => m + v.fat, 0);
console.log([totalCalories, totalCarbs, totalProtein, totalFat].join(' '));


