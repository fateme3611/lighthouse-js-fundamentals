const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("ingredients1");
let i= 0;
while (i<ingredients.length){
    console.log(ingredients[i]);
    i++;
}
// Write a for loop that prints out the contents of ingredients:
console.log("ingredients2");
for (let i = 0; i<ingredients.length; i++){
    console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("ingredients3");
let l=ingredients.length-1;
while (l >=0){
    console.log(ingredients[l]);
    l--;
}

let l2 = ingredients.length-1;
for(let i=l2; i>=0; i--){

    console.log(ingredients[i]);
}