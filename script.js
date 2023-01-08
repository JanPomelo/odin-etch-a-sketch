let container = document.getElementById('container');
let black = document.getElementById('black');
let rainbow = document.getElementById('rainbow');
let eraser = document.getElementById('eraser');
let shader = document.getElementById('shader');
let slider = document.getElementById('slido');
let clear = document.getElementById('clear');
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
shader.addEventListener('click',function () {
    currentColour = 'shader';
})

slider.addEventListener('change',function() {
    createPad(slider.value)
})
clear.addEventListener('click',function() {
    createPad(slider.value);
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
        div.addEventListener('click',addHovered);
        }
    }
}

function deleteDivs() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
}

function createPad(dimensions) {
        deleteDivs();
        addDivs(dimensions);
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
                this.style.backgroundColor = newColor;
                this.style.opacity = '1';
            }
            else if (currentColour === 'shader') {
                if (this.style.backgroundColor !== 'rgb(0, 0, 0)') {
                    this.style.backgroundColor = 'rgb(0, 0, 0)';
                    this.style.opacity = '0.1';
                } else {
                    if (Number(this.style.opacity) < 1) {
                        this.style.opacity = Number(this.style.opacity) + 0.1;
                    }
                }
            } else {
                this.style.backgroundColor = newColor;
                this.style.opacity = '1';
            }
        } 
    }
}



addDivs(50);