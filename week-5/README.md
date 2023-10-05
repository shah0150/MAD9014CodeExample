## DOM

HTML document is structured as a JavaScript Object. Every HTML element has a different properties which can help to manipulate it. It is possible to get, create, append or remove HTML elements using JavaScript. To select an HTML element, we use tag name, id, class name or other attributes.

### Getting elements by tag name

`getElementsByTagName()`:takes a tag name as a string parameter and this method returns an HTMLCollection object. An HTMLCollection is an array like object of HTML elements. The length property provides the size of the collection. Whenever we use this method we access the individual elements using index or after loop through each individual items. 

### Getting elements by class name

`getElementsByClassName()` method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collection. It is possible to loop through all the HTMLCollection elements. 

### Getting an element by id
`getElementsById()` targets a single HTML element. We pass the id without # as an argument.

### Getting elements by using querySelector methods
The `document.querySelector` method can select an HTML or HTML elements by tag name, by id or by class name.

`querySelector`: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

`querySelectorAll`: can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.

### Adding attribute
An attribute is added in the opening tag of HTML which gives additional information about the element. Common HTML attributes: id, class, src, style, href,disabled, title, alt. 

### Adding attribute using setAttribute
The `setAttribute()` method set any html attribute. It takes two parameters the type of the attribute and the name of the attribute. Let's add class and id attribute for the fourth title.

### Adding attribute without setAttribute
We can use normal object setting method to set an attribute but this can not work for all elements. Some attributes are DOM object property and they can be set directly. For instance id and class

### Adding class using classList
The class list method is a good method to append additional class. It does not override the original class if a class exists rather it adds additional class for the element.

### Removing class using remove
Similar to adding we can also remove class from an element. We can remove a specific class from an element.

### Adding Text to HTML element
An HTML is a build block of an opening tag, a closing tag and a text content. We can add a text content using the property `textContent` or `innerHTML`.

### Adding Text content using textContent
The textContent property is used to add text to an HTML element.

Most people get confused between textContent and innerHTML. textContent is meant to add text to an HTML element, however innerHTML can add a text or HTML element or elements as a child.

----------
### Event Listeners

Common HTML events:onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload. We can add event listener method to any DOM object. We use `addEventListener()` method to listen different event types on HTML elements. The `addEventListener()` method takes two arguments, an event listener and a callback function.

* click - when the element clicked
* dblclick - when the element double clicked
* mouseenter - when the mouse point enter to the element
* mouseleave - when the mouse pointer leave the element
* mousemove - when the mouse pointer move on the element
* mouseover - when the mouse pointer move on the element
* mouseout -when the mouse pointer out from the element
* input -when value enter to input field
* change -when value change on input field
* blur -when the element is not focused
* keydown - when a key is down
* keyup - when a key is up
* keypress - when we press any key
* onload - when the browser has finished loading a page

-----

### Getting value from an input element
We usually fill forms and forms accept data. Form fields are created using input HTML element. 
