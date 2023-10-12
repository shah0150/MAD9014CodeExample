
let body = document.querySelector("body")
body.style.backgroundColor = "lightblue";
let div = document.querySelector('div');
for (let i = 0; i <= 10; i++){
    if (i % 2 == 0) {
        let box = document.createElement('div')
        box.style.width = "150px";
        box.style.height = "120px"
        box.style.backgroundColor = "green";
        box.style.margin = "8px";
        box.textContent = i
        div.appendChild(box);
        console.log(i);
        div.appendChild(box)
    } else {
        let box = document.createElement('div')
        box.style.width = "150px";
        box.style.height = "120px"
        box.style.backgroundColor = "yellow";
        box.style.margin = "8px";
        box.textContent = i
        div.appendChild(box);
        console.log(i);
        div.appendChild(box)
    }
}