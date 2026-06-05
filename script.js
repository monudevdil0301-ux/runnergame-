const gameArea = document.querySelector('.game-area');
const player = document.querySelector('.player');
const gameOverScreen = document.getElementById('gameOverScreen');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('highScore');
const finalScoreDisplay = document.getElementById('finalScore');

let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
let gameRunning = true;
let isJumping = false;
let obstacleSpeed = 7;
let spawnRate = 80;
let spawnCounter = 0;

// Initialize high score display
highScoreDisplay.textContent = highScore;

// Jump handler
document.addEventListener('keydown', (e) => {
    if ((e.code === 'Space' || e.code === 'ArrowUp') && gameRunning && !isJumping) {
        jump();
    }
});

// Mobile touch support
document.addEventListener('touchstart', () => {
    if (gameRunning && !isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    player.classList.add('jump');
    
    setTimeout(() => {
        player.classList.remove('jump');
        isJumping = false;
    }, 600);
}

function createObstacle() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    obstacle.style.right = '-30px';
    gameArea.appendChild(obstacle);
    
    let position = -30;
    
    const moveObstacle = setInterval(() => {
        if (!gameRunning) {
            clearInterval(moveObstacle);
            obstacle.remove();
            return;
        }
        
        position -= obstacleSpeed;
        obstacle.style.right = position + 'px';
        
        // Check collision
        if (checkCollision(player, obstacle)) {
            endGame();
            clearInterval(moveObstacle);
        }
        
        // Remove obstacle when off screen
        if (position < -100) {
            obstacle.remove();
            clearInterval(moveObstacle);
            score++;
            scoreDisplay.textContent = score;
            
            // Increase difficulty
            if (score % 5 === 0) {
                obstacleSpeed += 1;
                spawnRate = Math.max(50, spawnRate - 2);
            }
        }
    }, 20);
}

function checkCollision(rect1, rect2) {
    const r1 = rect1.getBoundingClientRect();
    const r2 = rect2.getBoundingClientRect();
    
    return !(
        r1.right < r2.left ||
        r1.left > r2.right ||
        r1.bottom < r2.top ||
        r1.top > r2.bottom
    );
}

function gameLoop() {
    if (!gameRunning) return;
    
    spawnCounter++;
    if (spawnCounter >= spawnRate) {
        createObstacle();
        spawnCounter = 0;
    }
    
    requestAnimationFrame(gameLoop);
}

function endGame() {
    gameRunning = false;
    finalScoreDisplay.textContent = score;
    
    // Update high score
    if (score > highScore) {
        highScore = score;
        highScoreDisplay.textContent = highScore;
        localStorage.setItem('highScore', highScore);
    }
    
    gameOverScreen.classList.add('show');
}

function restartGame() {
    // Reset variables
    score = 0;
    gameRunning = true;
    isJumping = false;
    obstacleSpeed = 7;
    spawnRate = 80;
    spawnCounter = 0;
    
    // Reset display
    scoreDisplay.textContent = score;
    gameOverScreen.classList.remove('show');
    
    // Remove all obstacles
    const obstacles = document.querySelectorAll('.obstacle');
    obstacles.forEach(obs => obs.remove());
    
    // Reset player position
    player.classList.remove('jump');
    player.style.bottom = '80px';
    
    // Start game loop
    gameLoop();
}

// Start the game
gameLoop();