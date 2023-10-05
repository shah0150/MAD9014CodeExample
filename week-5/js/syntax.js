// getElementTagName

// document.getElementsByTagName('tagname (h1, h2, h3)')

// let className = document.getElementById('heading');
// console.log(className);

// let heading = document.querySelector('#heading');
// console.log("ID of " + heading);

// let tag = document.querySelector('p');
// console.log("tag" + tag);

// let className = document.querySelector('.list');
// console.log(className);

// let myHeadings = document.querySelectorAll('h1')

// console.log(myHeadings.length);

// for (let i = 0; i < myHeadings.length; i++){
//     console.log(myHeadings[i]);
// }

// let addAttribute = document.querySelectorAll('h1')
// addAttribute[0].className = 'professor';
// addAttribute[1].id = 'student'
// addAttribute[2].textContent = 'Adesh';

let myButton = document.querySelector('#btn');

myButton.addEventListener('click', function(){
    console.log("Button was clicked!");
});

let button2 = document.querySelector('#btn1');
button2.addEventListener('click', () => {
    console.log("Button 2 my Ro was clicked");
})


