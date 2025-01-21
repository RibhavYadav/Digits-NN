const canvas = document.querySelector('.canvas');
const resetCanvas = document.getElementById('reset');
const boxes = document.getElementsByClassName('box');
console.log(canvas);
let gridSize = 20;
let isDrawing = false;

// Create canvas
for (let i = 0; i < gridSize ** 2; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = 'white';
    div.style.width = `${canvas.clientWidth / gridSize}px`;
    div.classList.add('box')
    canvas.appendChild(div);
}

// Function to color the box
function color(e) {
    if (isDrawing && e.target.classList.contains('box')) {
        e.target.style.backgroundColor = `#EE7674`;
    }
}

// Add event listeners to color the box
canvas.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDrawing = true;
    color(e)
})
canvas.addEventListener('mousemove', (e) => {
    color(e);
});
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

// Reset the canvas
resetCanvas.addEventListener('click', () => {
    Array.from(boxes).forEach((box) => {
        box.style.backgroundColor = 'white';
    })
})