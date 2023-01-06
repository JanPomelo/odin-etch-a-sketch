let container = document.getElementById('container');

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

function addHovered() {
    if (this.className === 'div') {
        this.classList.add('divHovered');
    }
}


addDivs()