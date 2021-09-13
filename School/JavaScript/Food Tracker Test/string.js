
var pear = {
    calorie:5,
    carb: 5,
    protein:5,
    fat:5
};

function Batch(name){
    var calorieOne = [0];
    var carbOne = [0];
    var proteinOne = [0];
    var fatOne = [0];

    calorieOne.push(name.calorie);
    totalCalorie = calorieOne.reduce(function(calorieOne, calorieTwo) { return calorieOne + calorieTwo; }, 0);

    carbOne.push(name.carb);
    totalCarb = carbOne.reduce(function(carbOne, carbTwo) { return carbOne + carbTwo; }, 0);

    proteinOne.push(name.protein);
    totalProtein = proteinOne.reduce(function(proteinOne, proteinTwo) { return proteinOne + proteinTwo; }, 0);

    fatOne.push(name.fat);
    totalFat = fatOne.reduce(function(fatOne, fatTwo) { return fatOne + fatTwo; }, 0);
};

Batch(pear);
Batch(pear);

console.log(totalCalorie);
console.log(totalCarb);
console.log(totalProtein);
console.log(totalFat);

