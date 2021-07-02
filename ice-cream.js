let iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

const newArray = iceCreamFlavours.map(function (item){
    return item;
});


// const newArray2 = iceCreamFlavours.map((item)=>{
//     return item;
// });


//const newArray3 = iceCreamFlavours.map((item)=>item);

// const newArray4 = [...iceCreamFlavours];

newArray.push("root beer");
console.log(newArray);

console.log(iceCreamFlavours[0]);
console.log(newArray[newArray.length-1]);
console.log(newArray.length);

