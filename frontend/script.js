const canvas = document.querySelector('.canvas');
let gridSize = 16;

// Create canvas
for (let i = 0; i < gridSize ** 2; i++) {
    const div = document.createElement('div');
    div.classList.add('box')
    canvas.appendChild(div);
}