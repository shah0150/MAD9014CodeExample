let intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        let {target, isIntersecting} = entry

        if(isIntersecting) {
            console.log('image is now in viewport');
            target.classList.add('visible')

            let imageSrc = target.getAttribute('data-src')
            if(imageSrc){
                target.style.backgroundImage = `url(${imageSrc})`
            }
        } else {
            console.log('Image is no longer in viewport');
        }
    });
      root: null;
      rootMargin: '0px'
      threshold: 0.5  
})

let images = document.querySelectorAll('.image')
images.forEach(image => intersectionObserver.observe(image))
