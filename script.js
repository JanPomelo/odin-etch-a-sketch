let container = document.getElementById('container');


function addDivs() {
    for (let i = 1; i <= 4;i++) {
        let div = document.createElement('div');
        container.appendChild(div);
        div.className = 'divi';
    }
}

addDivs()