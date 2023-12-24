const container = document.createElement('div');
container.setAttribute("style", "display: block;");

const resetButton = document.createElement('button');
resetButton.textContent = "Reset";
resetButton.addEventListener('click', function() {
    let n = prompt("Enter a number between 1 and 100");
    if (n < 1 || n > 100) {
        alert("Invalid input. Enter a number between 1 and 100");
    } else {
        container.innerHTML = "";
        createGrid(n);
    }
});

document.body.appendChild(resetButton);

function createGrid(n) {
    for (let rowIndex = 0; rowIndex < n; rowIndex++) {
        const rowContainer = document.createElement('div');
        rowContainer.setAttribute("style", "display: flex; flex-wrap: wrap;");
    
        for (let colIndex = 0; colIndex < n; colIndex++) {
            let div = document.createElement('div');
            div.setAttribute("style", "width: 25px; height: 25px; border: 1px solid black;");
            
            let randomR = Math.floor(Math.random() * 256);
            let randomG = Math.floor(Math.random() * 256);
            let randomB = Math.floor(Math.random() * 256);
    
            div.addEventListener('mouseover', function() {
                div.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            });
            rowContainer.appendChild(div);
        }
    
        container.appendChild(rowContainer);
    }
    
    document.body.appendChild(container);
}

function initializeGrid() {
    createGrid(16);
}

initializeGrid();
