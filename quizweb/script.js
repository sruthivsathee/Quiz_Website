// Define the quiz questions
const quizQuestions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Madrid', 'London', 'Rome'],
      answer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
      answer: 'Mars'
    },
    {
      question: 'Which country gifted the Statue of Liberty to USA?',
      options: ['Germany', 'France', 'England', 'India'],
      answer: 'France'
    },
    {
        question:'India became a member of the United Nations in',
        options:['1956','1945','1967','1958'],
        answer:'1945'
    },
    {
        question:'What is the currency of Norway?',
        options:['Ruble','Franc','Krone','Peso'],
        answer:'Krone'
    }
    // Add more questions here...
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  // Select elements
  const startButton = document.getElementById('startButton');
  const questionContainer = document.getElementById('questionContainer');
  const nextButton = document.getElementById('nextButton');
  const scoreContainer = document.getElementById('scoreContainer');
  const scoreDisplay = document.getElementById('score');
  
  // Hide question container and score container initially
  questionContainer.style.display = 'none';
  scoreContainer.style.display = 'none';
  
  // Function to start the quiz
  function startQuiz() {
    startButton.style.display = 'none'; // Hide start button
    questionContainer.style.display = 'block'; // Show question container
    displayQuestion();
  }
  
  // Function to display a question
  function displayQuestion() {
    const currentQuestionObj = quizQuestions[currentQuestion];
    const questionElement = document.createElement('h2');
    questionElement.textContent = currentQuestionObj.question;
  
    const optionsElement = document.createElement('div');
    currentQuestionObj.options.forEach((option) => {
      const optionButton = document.createElement('button');
      optionButton.textContent = option;
      optionButton.addEventListener('click', checkAnswer);
      optionsElement.appendChild(optionButton);
    });
  
    // Clear previous question
    questionContainer.innerHTML = '';
    questionContainer.appendChild(questionElement);
    questionContainer.appendChild(optionsElement);
  }
  
  // Function to check the selected answer
  function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuestionObj = quizQuestions[currentQuestion];
  
    if (selectedOption === currentQuestionObj.answer) {
      score++;
    }
  
    // Move to the next question
    currentQuestion++;
    
    if (currentQuestion < quizQuestions.length) {
      displayQuestion();
    } else {
      // End of quiz
      showScore();
    }
  }
  
  // Function to display the final score
  function showScore() {
    questionContainer.style.display = 'none'; // Hide question container
    scoreContainer.style.display = 'block'; // Show score container
    scoreDisplay.textContent = score;
  }
  
  // Attach event listeners
  startButton.addEventListener('click', startQuiz);
  nextButton.addEventListener('click', displayQuestion);
  