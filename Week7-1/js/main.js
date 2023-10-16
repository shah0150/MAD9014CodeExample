const space = {
    mercury: {
        gravity: 0.4,
        image: "mercury.png"
    },
    venus: {
        gravity: 0.9,
        image: "venus.png"
    },
    earth: {
        gravity: 1.0,
        image: "earth.png"
    },
    mars: {
        gravity: 0.4,
        image: "mars.png"
    },
    jupiter: {
        gravity: 2.5,
        image: "jupiter.png"
    },
    saturn: {
        gravity: 1.1,
        image: "saturn.png"
    },
    uranus: {
        gravity: 0.9,
        image: "uranus.png"
    },
    neptune: {
        gravity: 1.1,
        image: "neptune.png"
    }
}

let input = document.querySelector("input")
console.log(input);
let select = document.querySelector("select")
let button = document.querySelector("button")
let container = document.querySelector(".container")

let weight;

let containerUI = (img, text) => {
    let image = document.createElement("img")
    image.src = `images/${img}`
    let p = document.createElement("p")
    p.textContent = text
    p.style.fontSize = "45px"
    container.appendChild(image)
    container.appendChild(p)
}

button.addEventListener("click", () => {
    let imgSrc;
    container.innerHTML = ""
    imgSrc = space[select.value].image
    console.log(imgSrc);
    weight = input.value * space[select.value].gravity
    containerUI(imgSrc, weight)
})

