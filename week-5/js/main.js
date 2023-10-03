// console.log("Hey, I am now connected to js/main.js");

document.body.style.backgroundColor = "lightblue";

let fullName = "Adesh Shah";
let newHeading = document.getElementById('heading1');
console.log(newHeading);

newHeading.textContent = fullName;

let myBio = `${fullName} is a professor and research manager and program coordinator at Algonquin College`

let newPara = document.getElementById('para1');
newPara.textContent = myBio;


