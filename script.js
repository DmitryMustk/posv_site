const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const matrixSize = 30;
const columns = canvas.width / matrixSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00FF00';
    ctx.font = matrixSize + 'px arial';

    for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * matrixSize, drops[i] * matrixSize);

        if (drops[i] * matrixSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

function update() {
    draw();
    requestAnimationFrame(update);
}

update();
