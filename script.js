let container = document.getElementById('container');
let start = document.getElementById('start');
start.addEventListener('click',createPad);
let black = document.getElementById('black');
let rainbow = document.getElementById('rainbow');
let eraser = document.getElementById('eraser');
let currentColour = 'black';

function randomBetween(min, max) {
     return min + Math.floor(Math.random() * (max - min + 1));
}

black.addEventListener('click',function () {
    currentColour = 'black';
})
rainbow.addEventListener('click',function () {
    currentColour = 'random';
})
eraser.addEventListener('click',function () {
    currentColour = 'white';
})

let mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}


function addDivs(dimensions) {
    for (let i = 1; i <= dimensions;i++) {
        for (j = 1; j <= dimensions;j++) {
        let div = document.createElement('div');
        container.appendChild(div);
        div.style.width = String(100/dimensions) + '%';
        div.style.height = String(100/dimensions) + '%';
        div.className = 'div';
        div.addEventListener('mouseover',addHovered);
        }
    }
}

function deleteDivs() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
}

function createPad() {
    let divDimension = Number(prompt('What dimensions do you wish your Drawpad to be?'));
    if (divDimension > 100 || divDimension < 1 || isNaN(divDimension)) {
        divDimension = Number(prompt('Please enter a Number between 1 and 100'));
        addDivs(50);
    } else {
        deleteDivs();
        addDivs(divDimension);
    }
}

function addHovered() {
    if (this.className === 'div') {
       if (mouseDown) {
        let newColor = currentColour;
        if (currentColour === 'random') {
            let r = randomBetween(0,255);
            let g = randomBetween(0,255);
            let b = randomBetween(0,255);
            newColor = `rgb(${r},${g},${b})`;
        }
            this.style.backgroundColor = newColor;
       }
    }
}



addDivs(50);