let container = document.getElementById('container');


function addDivs() {
    for (let i = 1; i <= 4;i++) {
        for (j = 1; j <= 4;j++) {
        let div = document.createElement('div');
        container.appendChild(div);
        div.className = 'div';
        }
    }
}

addDivs()