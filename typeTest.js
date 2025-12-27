//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = 
  `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`
  ;
let seconds = 30;
let timer;
const testInput = document.getElementById("input");


const testPara = document.getElementById("sentence");

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  testPara.textContent = sentences;
  testInput.disabled = false;
  startBtn.disabled = true;
   startTimer();
});

const testResult = document.getElementById("result");
const testSpeedPerformed = document.getElementById("speed");

function startTimer() {
  document.getElementById("timer").textContent = "00:30";
  timer = setInterval(() => {
    seconds--;
    document.getElementById("timer").textContent = `00:${seconds}`;
    if (seconds <= 0) {
      clearInterval(timer);
      testResult.style.display = "block";
      testInput.disabled = true;
      startBtn.disabled = true;
      calcResult();
    }
  }, 1000);
}


const retryBtn = document.getElementById("retry-btn");
retryBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  testResult.style.display = "none";
  testInput.value = "";
  testInput.disabled = false;
  seconds = 30;
   document.getElementById("timer").textContent = "00:30";
});

function calcResult() {
  const typedText = testInput.value.trim();
  const typedWords = typedText.split(/\s+/);
  const originalWords = sentences.trim().split(/\s+/);

  let correctWords = 0;
  typedWords.forEach((word, idx) => {
    if (word === originalWords[idx]) {
      correctWords++;
    }
  });

  const timeInMinute = 30 / 60;
  const wpm = Math.round((typedWords.length / timeInMinute));
  const accuracy = typedWords.length === 0 ? 0 : Math.round((correctWords / typedWords.length) * 100);
  document.getElementById("speed").textContent = wpm;
  document.getElementById("accuracy").textContent = accuracy;
}