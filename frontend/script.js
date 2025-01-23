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

// Drawing network lines
const networkLines = document.getElementById('network-lines')
const neuralNetwork = document.querySelector('.neural-network')
const ctx = networkLines.getContext('2d');

networkLines.width = neuralNetwork.offsetWidth;
networkLines.height = neuralNetwork.offsetHeight;

function drawConnections() {
    const layers = document.querySelectorAll('.hidden-layer');
    const container = neuralNetwork.getBoundingClientRect();
    for (let i = 0; i < layers.length - 1; i++) {
        // Get two adjacent layers and their nodes
        const currLayer = layers[i];
        const nextLayer = layers[i + 1];
        const currNodes = currLayer.querySelectorAll('.node');
        const nextNodes = nextLayer.querySelectorAll('.node');

        // Nested for loop for each node
        currNodes.forEach((currNode) => {
            // Center of the current node
            const currRect = currNode.getBoundingClientRect();
            const currX = currRect.left + currRect.width / 2 - container.left;
            const currY = currRect.top + currRect.height / 2 - container.top;

            nextNodes.forEach((nextNode) => {
                // Center of the next node
                const nextRect = nextNode.getBoundingClientRect();
                const nextX = nextRect.left + nextRect.width / 2 - container.left;
                const nextY = nextRect.top + nextRect.height / 2 - container.top;

                // Draw the line
                ctx.beginPath();
                ctx.moveTo(currX, currY);
                ctx.lineTo(nextX, nextY);
                ctx.strokeStyle = 'darkblue';
                ctx.lineWidth = 2;
                ctx.stroke();
            })
        })
    }
}


window.onload = () => {
    drawConnections();
};