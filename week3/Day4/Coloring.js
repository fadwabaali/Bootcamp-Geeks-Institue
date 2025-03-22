// Colors for the palette
const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'];

// Generate the color palette
const colorPalette = document.getElementById('color-palette');
colors.forEach(color => {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = color;
    colorDiv.addEventListener('click', () => selectColor(color));
    colorPalette.appendChild(colorDiv);
});

// Generate the drawing grid
const drawingGrid = document.getElementById('drawing-grid');
for (let i = 0; i < 100; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.addEventListener('mousedown', startDrawing);
    gridDiv.addEventListener('mouseover', draw);
    gridDiv.addEventListener('mouseup', stopDrawing);
    drawingGrid.appendChild(gridDiv);
}

let selectedColor = 'black';
let isDrawing = false;

function selectColor(color) {
    selectedColor = color;
}

function startDrawing(event) {
    isDrawing = true;
    event.target.style.backgroundColor = selectedColor;
}

function draw(event) {
    if (isDrawing) {
        event.target.style.backgroundColor = selectedColor;
    }
}

function stopDrawing() {
    isDrawing = false;
}

// Prevent default behavior for mouse events
document.body.addEventListener('mouseup', stopDrawing);
document.body.addEventListener('mouseleave', stopDrawing);