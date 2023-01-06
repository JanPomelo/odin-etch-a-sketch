let container = document.getElementById('container');
let start = document.getElementById('start');
start.addEventListener('click',createPad);

let mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}


function addDivs() {
    for (let i = 1; i <= 16;i++) {
        for (j = 1; j <= 16;j++) {
        let div = document.createElement('div');
        container.appendChild(div);
        div.className = 'div';
        div.addEventListener('mouseover',addHovered);
        }
    }
}

function createPad() {
    prompt('Would you like to delete your drawings?')
}

function addHovered() {
    if (this.className === 'div') {
        if (mouseDown) {
            this.classList.add('divHovered');
        }
    }
}



addDivs()