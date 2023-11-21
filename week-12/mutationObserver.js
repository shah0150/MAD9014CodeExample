let mutationObserver = new MutationObserver((mutations, observer) =>{
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            console.log('child list changed');
        

        mutation.addedNodes.forEach(addedNode => {
            if (addedNode.nodeType === 1){
                addedNode.classList.add('highlight')
            }
        });
    } else if (mutation.type === 'attributes') {
        console.log('Attributes changes');

        if (mutation.attributeName === 'data-custom'){
            mutation.target.style.backgroundColor = 'lightblue'
        }
    } else if (mutation.type === 'characterData') {
        console.log('Character data changed');
    }
    });
});

let observedElement = document.getElementById('observedElement')
mutationObserver.observe(observedElement, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
});

setTimeout(() => {
    let newParagraph = document.createElement('p')
    newParagraph.textContent = "New content added"
    newParagraph.setAttribute('data-custom', 'value')
    observedElement.appendChild(newParagraph)
}, 2000)
