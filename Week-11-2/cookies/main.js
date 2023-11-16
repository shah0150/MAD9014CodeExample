// Function to set Cookies
function setCookie(name, value, daysToLive) {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToLive)
    let cookieString = name + '=' + encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; path=/'

    document.cookie = cookieString
}

let setCookieButton = document.querySelector('#setCookies');
setCookieButton.addEventListener('click', function(){
    // Set cookie named username with value of "your-name" that expires in 7 days.

    setCookie('username', 'Adesh', 7)
    let output = document.getElementById('output')
    output.innerText = 'Cookies Set'
})

// Function to get Cookies

function getCookie(name) {
    let cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++){
        let cookie = cookies[i].trim()
        console.log(cookie);

        if (cookie.indexOf(name + '=') === 0){
            return decodeURIComponent(cookie.substring(name.length + 1))
        }
    }
    return;
}

let getCookieButton = document.getElementById('getCookies')
getCookieButton.addEventListener('click', function() {
    let output = document.getElementById('output')
    let username = getCookie('username')
    output.innerText = 'Welcome back, ' + username + '!'
})

// fucntion to delete cookie by name

function deleteCookie(name){
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
}

let delCookie = document.getElementById('delCookies')
delCookie.addEventListener('click', function(){
    let username = deleteCookie('username')
    let output = document.getElementById('output')
    output.innerText = "Cookie " + username + " successfully deleted!"
})

function deleteCookie(name) {
    let delCookies = document.cookie.split(';')
    for (let i = 0; i < delCookies.length; i++){
        let delCookie = delCookies[i].trim()
        console.log(delCookie);

        if (delCookie.indexOf(name + '=') === 0){
            return decodeURIComponent(delCookie.substring(name.length + 1))
        }
    }
    return;
}