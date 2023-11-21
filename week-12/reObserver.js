// Create ResizeObserver instance with a callback function
let resizeObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
        let { target, contentRect } = entry

        console.log(`Elements resized: ${target.id}`);
        console.log(`New size - width: ${contentRect.width}, height: ${contentRect.height}`);

        if(contentRect.width > 400){
            target.style.backgroundColor = 'lightgreen'
        } else {
            target.style.backgroundColor = 'brown'
        }
    });
});

let observedElement = document.getElementById("observedElement")
resizeObserver.observe(observedElement)