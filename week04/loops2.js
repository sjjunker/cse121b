const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

//for loop
console.log("For Loop");
for (let i = 0; i <= studentReport.length; i++) {
    if( studentReport[i] < 30) {
        console.log(studentReport[i]);
    } 
}

//while loop
console.log("While Loop");
let counter = 0;

while(counter < studentReport.length) {
    if( studentReport[counter] < 30) {
        console.log(studentReport[counter]);
    } 
    counter++;
}

//forEach
console.log("forEach");

studentReport.forEach(function (number) {
    if(number < 30) {
        console.log(number);
    } 
});

//for in
console.log("For In");

for(let number in studentReport) {
    if( studentReport[number] < 30) {
        console.log(studentReport[number]);
    } 
}

//Days of the week
console.log("Days of the Week");
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

for(let i = 0; i < daysOfTheWeek.length; i++) {
    console.log(daysOfTheWeek[i]);
}

/* Learning Activity 2 */
function calculate(a, b, callback) {
    callback(a + b);
  }
  
  function displayResult(result) {
    console.log('The result is: ' + result);
  }

  calculate(2, 3, displayResult);