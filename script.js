const questions = [
    {
      question: "What does DSA stand for?",
      options: [
        { op: "Document Structure Algorithm", status: false },
        { op: "Data Structure Algorithm", status: true },
        { op: "Data Software Algorithm", status: false },
        { op: "Data Structure Architecture", status: false },
      ],
    },
    {
      question: "What is OOPS in Programming?",
      options: [
        { op: "Object Oriented Programming", status: true },
        { op: "Data Structure Algorithm", status: false },
        { op: "Data Software Algorithm", status: false },
        { op: "Data Structure Architecture", status: false },
      ],
    },
    {
      question: "How many types of DataTypes are there in JS?",
      options: [
        { op: "1", status: false },
        { op: "7", status: true },
        { op: "10", status: false },
        { op: "15", status: false },
      ],
    },
  ];
  
  let currentIndex = 0;
  let score = 0;
  let timer;
  let timeLeft = 60;
  let attempted = 0;
  let correct = 0;
  let incorrect = 0;
  
  const startScreen = document.getElementById("start-screen");
  const quizCard = document.getElementById("quiz-card");
  const resultScreen = document.getElementById("result-screen");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const timerElement = document.getElementById("time-left");
  
  function startTimer() {
    timeLeft = 60;
    timerElement.textContent = timeLeft;
    clearInterval(timer);
    timer = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;
      if (timeLeft === 0) {
        clearInterval(timer);
        nextQuestion();
      }
    }, 1000);
  }
  
  function startQuiz() {
    startScreen.classList.add("hidden");
    quizCard.classList.remove("hidden");
    Quiz();
  }
  
  function Quiz() {
    const currentQuestion = questions[currentIndex];
    questionElement.innerHTML = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.innerHTML = option.op;
      btn.classList.add("btn");
      optionsElement.appendChild(btn);
      if (option.status) btn.dataset.status = option.status;
      btn.addEventListener("click", ansSelected);
    });
    startTimer();
  }
  
  function nextQuestion() {
    clearInterval(timer);
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      Quiz();
    } else {
      showResult();
    }
  }
  
  function ansSelected(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.status === "true";
    attempted++;
    if (isCorrect) {
      score++;
      correct++;
      selectedButton.classList.add("correct");
    } else {
      incorrect++;
      selectedButton.classList.add("incorrect");
    }
    const buttons = optionsElement.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.disabled = true;
      btn.style.pointerEvents = "none";
    });
    clearInterval(timer);
  }
  
  function showResult() {
    quizCard.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    document.getElementById(
      "result-score"
    ).textContent = `Your Score: ${score} / ${questions.length}`;
    document.getElementById(
      "result-details"
    ).textContent = `Attempted: ${attempted}, Correct: ${correct}, Incorrect: ${incorrect}`;
  }
  
  function restartQuiz() {
    currentIndex = 0;
    score = 0;
    attempted = 0;
    correct = 0;
    incorrect = 0;
    resultScreen.classList.add("hidden");
    quizCard.classList.remove("hidden");
    Quiz();
  }
  
  Quiz();
  