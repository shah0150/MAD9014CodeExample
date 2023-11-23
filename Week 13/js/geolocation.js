const paragraph = document.querySelector('p');

const getLocalStorage = (key, value) => {
    // Verify the local storage first
    const data = localStorage.getItem(key);

    if (!data) {
        localStorage.setItem('location', JSON.stringify(value))
    }

    // Return the data 
    return JSON.parse(data);
};

document.getElementById('getLocation').addEventListener('click', function (){
    if (navigator.geolocation){
        // get the current position
        navigator.geolocation.getCurrentPosition(showPosition, showError)
    } else {
        // Geo location is not supported
        paragraph.innerHTML = "Geolocation not available"
    }

    function showPosition(position){
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const accuracy = position.coords.accuracy

        paragraph.innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}<br>Accuracy: ${accuracy}`

        const response = {
            latitude,
            longitude,
            accuracy,
        }

        getLocalStorage('location', response);

        return response;
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                paragraph.textContent = "User denied permission"
                break;

            case error.POSITION_UNAVAILABLE:
                paragraph.textContent = "Position Unavailable"
                break;
            
            case error.TIMEOUT:
                paragraph.textContent = "Timed Out"
                break;
            
            //case error.UNKNOWN_ERROR:
            //    paragraph.textContent = "Unknown error getting location"
            //    break;
                
            default:
                paragraph.textContent = "Unknown error getting location"
                break;
                
        }
    }
})