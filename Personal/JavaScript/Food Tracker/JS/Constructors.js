//Constructors
function Food(size, name, calorie, carb, protein, fat){
    this.size = size;
    this.name = name;
    this.calorie = calorie;
    this.carb = carb;
    this.protein = protein;
    this.fat = fat;
};

function Meal(food, calorie, carb, protein, fat){
    this.food = food;
    this.calorie = calorie;
    this.carb = carb;
    this.protein = protein;
    this.fat = fat;
}