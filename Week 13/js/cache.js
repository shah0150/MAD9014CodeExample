document.querySelector('#fetchButton').addEventListener('click', function() {
    fetchAndCache('https://jsonplaceholder.typicode.com/todos/1')
})
async function fetchAndCache(url){
    try {
        let cache = await caches.open('my-cache')
        let cachedResponse =  await cache.match(url)

        if (cachedResponse) {
            let data = await cachedResponse.json()
            console.log("Data coming from Cache: ", data);
            let output = document.querySelector('#output')
            output.innerHTML = `${data.title}`
        } else {
            let response = await fetch(url)
            await cache.put(url, response.clone())
            let data = await response.json()
            let output = document.querySelector('#output')
            output.innerHTML = `${data.title}`
            console.log("Data coming from network: ", data);
        }
    } catch (error) {
        console.log("Erron getting the data", error);
    }
}

