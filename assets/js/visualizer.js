const canvas = document.getElementById("music-visualizer");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = 120;
}
resize();
window.addEventListener("resize", resize);

// Simple waveform animation placeholder
let t = 0;
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(255,200,150,0.8)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let x = 0; x < canvas.width; x++) {
        const y = 60 + Math.sin(x * 0.02 + t) * 20;
        ctx.lineTo(x, y);
    }

    ctx.stroke();
    t += 0.05;
    requestAnimationFrame(animate);
}
animate();
    