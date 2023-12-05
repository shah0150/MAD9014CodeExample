document.getElementById('openNewWindow').addEventListener('click', openNewWindow)

document.getElementById('closeCurrentWindow').addEventListener('click', closeCurrentWindow)

function openNewWindow(){
    let url = "https://mad9014.github.io/f2023";
    let features = "menubar=yes, location=yes,resizable=yes,scrollbars=yes,status=no";
    let winRef = window.open(url, '', features)

    // Add an eventListener to the new window
    winRef.addEventListener('load', function(){
        alert("New Window Loaded")
    });
}

function closeCurrentWindow(){
    window.close();
}

// Event Listener for page unload

window.addEventListener('beforeunload', function(event){
    // This will triggred before the page unloads
    let confirmationMessage = "Are you sure you want to leave?"
    event.returnValue = confirmationMessage
    return confirmationMessage // Old browser
})

// event listerner for page show
window.addEventListener('pageshow', function(event){
    if (event.persisted){
        alert("Page was loaded from cache")
    } else {
        alert("Page was NOT loaded from cache")
    }
})



