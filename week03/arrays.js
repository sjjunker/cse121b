//Add li elements
let myArray = ["one", "two", "three"];
let myHTMLArray = myArray.map((item) => `<li>${item}</li>`);
document.getElementById("myList").innerHTML = myHTMLArray.join();

//Set letter grade to GPA form
let letterArray = ["A", "B", "A"];
let gpaArray = letterArray.map(letter => letter === "A" ? 4 : 3);

//Find the GPA
let GPA = gpaArray.reduce((total, gradePoint) => total + gradePoint) / gpaArray.length;

//Filter fruits to keep only what is greater than six characters long
let myFruits = ["watermelon", "peach", "apple", "tomato", "grape"];
let longNamedFruits = myFruits.filter(fruit => fruit.length > 6);

//indexOf
let numberArray = [12, 34, 21, 54];
let luckNumber = 21;
let luckNumberIndex = numberArray.indexOf(luckNumber);