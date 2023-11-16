// Function to set a cookie
function setCookie(name, value, daysToLive) {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToLive);
    let cookieString = name + '=' + encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; path=/';
    document.cookie = cookieString;
}

// Function to get a cookie
function getCookie(name) {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name + '=') === 0) {
            return decodeURIComponent(cookie.substring(name.length + 1));
        }
    }
    return null;
}

// Function to delete a cookie by name
function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}



let setCookieButton = document.getElementById('setCookies');
setCookieButton.addEventListener('click', function () {
    // Set a cookie named 'username' with the value 'John' that expires in 7 days
    setCookie('username', 'Arianne', 7);

    // Display a message or update the UI as needed
    let outputElement = document.getElementById('output');
    outputElement.innerText = 'Cookie set!';

});

let getCookieButton = document.getElementById('getCookies')
getCookieButton.addEventListener('click', function (){
    let outputElement = document.getElementById('output');
    let username = getCookie('username');
    outputElement.innerText = 'Welcome back, ' + username + '!';

});

let delCookieButton = document.getElementById('delCookies')
delCookieButton.addEventListener('click', function (){
    let username = deleteCookie('username');
    let outputElement = document.getElementById('output');
    outputElement.innerText = "Cookie " + username + " Successfully Deleted" + "!";
})

