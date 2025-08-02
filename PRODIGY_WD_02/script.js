let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function updateDisplay() {
  const time = Date.now() - startTime + elapsedTime;
  const date = new Date(time);
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
  document.getElementById('display').textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function start() {
  if (!isRunning) {
    startTime = Date.now();
    timer = setInterval(updateDisplay, 10);
    isRunning = true;
  }
}

function pause() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime += Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  document.getElementById('display').textContent = "00:00:00";
  document.getElementById('laps').innerHTML = "";
}

function lap() {
  if (isRunning) {
    const lapTime = document.getElementById('display').textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap: ${lapTime}`;
    document.getElementById('laps').appendChild(lapItem);
  }
}
