if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('service-worker.js')
    .then(registration => {
        console.log('Service Worker registrated with scope: ', registration.scope);
    })
    .catch(error => {
        console.log('Error registerating', error);
    });
}