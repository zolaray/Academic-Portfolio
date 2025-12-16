// Timer variables
let timer;
let timeLeft;
let isRunning = false;
let currentSession = 'focus';
let currentMode = 'standard';

// DOM elements
const timerDisplay = document.getElementById('timer-display');
const startBtn = document.querySelector('.startbtn');
const stopBtn = document.querySelector('.stopbtn');
const standardModeBtn = document.getElementById('standard-mode');
const deepModeBtn = document.getElementById('deep-mode');
const sessionTypes = document.querySelectorAll('.session-type');

// Mode settings
const modes = {
    standard: { focus: 25, shortBreak: 5, longBreak: 15 },
    deep: { focus: 50, shortBreak: 10, longBreak: 20 }
};

// Initialize timer
function initTimer() {
    timeLeft = modes[currentMode][currentSession] * 60;
    updateDisplay();
}

// Update display
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

// Start/pause timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startBtn.textContent = 'Pause';
        timer = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert(`Time's up! ${currentSession === 'focus' ? 'Take a break!' : 'Back to work!'}`);
                isRunning = false;
                startBtn.textContent = 'Start';
                initTimer();
            }
        }, 1000);
    } else {
        pauseTimer();
    }
}

// Pause timer
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = 'Resume';
}

// Stop timer
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = 'Start';
    initTimer();
}

// Set session type (focus, shortBreak, longBreak)
function setSessionType(type) {
    currentSession = type;
    sessionTypes.forEach(session => {
        session.classList.toggle(
            'active',
            session.textContent.toLowerCase().includes(type.replace('Break', '').toLowerCase())
        );
    });
    stopTimer();
}

// Set mode (standard or deep)
function setMode(mode) {
    currentMode = mode;
    standardModeBtn.classList.toggle('active', mode === 'standard');
    deepModeBtn.classList.toggle('active', mode === 'deep');
    stopTimer();
}

// Event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
standardModeBtn.addEventListener('click', () => setMode('standard'));
deepModeBtn.addEventListener('click', () => setMode('deep'));

sessionTypes.forEach(session => {
    session.addEventListener('click', () => {
        const text = session.textContent.trim().toLowerCase();

        let type;
        if (text.includes('short')) type = 'shortBreak';
        else if (text.includes('long')) type = 'longBreak';
        else type = 'focus';

        setSessionType(type);
    });
});

// Init
initTimer();
