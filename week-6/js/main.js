// let body = document.querySelector('body');
// body.style.backgroundColor = "lightblue";

// let div = document.querySelector('div');

// for (let i = 0; i <= 10; i++){
//     if (i % 2 == 0){
//         let box = document.createElement('div');
//         box.style.width = '150px';
//         box.style.height = '120px';
//         box.style.margin = '50px';
//         box.style.display = "flex";
//         box.style.justifyContent = "center";
//         box.style.alignItems = "center";
//         box.style.backgroundColor = 'green';
//         console.log("even numbers " + i);
//         box.textContent = i;
//         div.appendChild(box);
//     } else{
//         let box = document.createElement('div');
//         box.style.width = '150px';
//         box.style.height = '120px';
//         box.style.backgroundColor = 'yellow';
//         console.log("odd numbers" + i);
//         box.textContent = i;
//         div.appendChild(box);
//         box.style.margin = '50px';
//         box.style.display = "flex";
//         box.style.justifyContent = "center";
//         box.style.alignItems = "center";
//     }
// }


// Some theory on event.preventDefault()

// e.preventDefault() tells the browser that if there is a default behavior for this event on this object, then skip that default behavior.

// So, for example, if you had a submit button that the default behavior was to submit a form and you had a click handler on that button that did a preventDefault(), then the browser would not submit the form when the button was clicked. A classic use of this might be when the form doesn't validate so you show the user an error message and don't want the form to be submitted to the server.

// Or another example. If you set up a click handler for a link and you call e.preventDefault() in that click handler, then the browser will not process the click on the link and will not follow the href in the link.

// event.preventDefault() is an important method used in the event handling of webpages. 

// Calling event.preventDefault() will prevent the default behavior of an element from triggering, allowing more control over the flow of an application. For example, if you create a form on your page, calling event.preventDefault() on the form's submission will prevent the page from refreshing, allowing you to handle and process the form without causing the entire page to reload.

// document.getElementById("prevent").addEventListener("click",(event)=>{
//     event.preventDefault();
// })
/* Disable right-click menu on page */
document.addEventListener('contextmenu', function(event) { 
    event.preventDefault()
});
