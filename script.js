// Animation frame for watermark
const canvas = document.getElementById('watermarkCanvas');
const ctx = canvas.getContext('2d');

// Adjust canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawWatermark();
}

// Function to draw watermark
function drawWatermark() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '50px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(-Math.PI / 4);
    ctx.fillText('ERROR_4', 0, 0);
    ctx.restore();
}

// Update canvas on resize
window.addEventListener('resize', resizeCanvas);

// Initial draw
resizeCanvas();
