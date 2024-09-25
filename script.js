let newMemberButton = document.getElementById('newMemberButton');
if(newMemberButton != null){
    document.getElementById('newMemberButton').addEventListener('click', () => {
        window.location.href = '/newmember';
    });
}

let photoGallaryButton = document.getElementById('photoGallaryButton');
if(photoGallaryButton != null){
    document.getElementById('photoGallaryButton').addEventListener('click', () => {
        window.location.href = '/photos';
    });
}

let blogButton = document.getElementById('blogButton');
if(blogButton != null){
    document.getElementById('blogButton').addEventListener('click', () => {
        window.location.href = '/blog';
    });
}

let backButton = document.getElementById('homeButton');
if(backButton != null){
    document.getElementById('homeButton').addEventListener('click', () => {
        window.location.href = '/index';
    });
}



const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

function createSnowflakes() {
    for (let i = 0; i < 100; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            speed: Math.random() * 1 + 0.5,
        });
    }
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgb(32,32,32)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    snowflakes.forEach(snowflake => {
        ctx.moveTo(snowflake.x, snowflake.y);
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    });
    ctx.fill();
    updateSnowflakes();
}

function updateSnowflakes() {
    snowflakes.forEach(snowflake => {
        snowflake.y += snowflake.speed;
        if (snowflake.y > canvas.height) {
            snowflake.y = 0;
            snowflake.x = Math.random() * canvas.width;
        }
    });
}

function animateSnow() {
    drawSnowflakes();
    requestAnimationFrame(animateSnow);
}

createSnowflakes();
animateSnow();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    snowflakes = [];
    createSnowflakes();
});
