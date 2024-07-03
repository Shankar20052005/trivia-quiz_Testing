document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            question: "What is the capital of France?",
            answers: ["Paris", "London", "Rome", "Berlin"],
            correct: 0
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: ["Earth", "Mars", "Jupiter", "Saturn"],
            correct: 1
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            answers: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
            correct: 0
        }
    ];
    
    let currentQuestionIndex = 0;
    let score = 0;
    
    function loadQuestion() {
        const questionContainer = document.getElementById('quiz-container');
        const question = questions[currentQuestionIndex];
        
        questionContainer.innerHTML = `
            <div>
                <h5>${question.question}</h5>
                ${question.answers.map((answer, index) => `
                    <label>
                        <input type="radio" name="answer" value="${index}">
                        ${answer}
                    </label>
                `).join('')}
            </div>
        `;
    }
    
    document.getElementById('next-btn').addEventListener('click', function() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        
        if (selectedAnswer && parseInt(selectedAnswer.value) === questions[currentQuestionIndex].correct) {
            score++;
        }
        
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            document.getElementById('next-btn').style.display = 'none';
            document.getElementById('submit-btn').style.display = 'inline-block';
        }
    });
    
    document.getElementById('submit-btn').addEventListener('click', function() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        
        if (selectedAnswer && parseInt(selectedAnswer.value) === questions[currentQuestionIndex].correct) {
            score++;
        }
        
        const resultContainer = document.getElementById('result-content');
        resultContainer.innerHTML = `Your score is ${score} out of ${questions.length}.`;
        document.getElementById('resultModal').style.display = 'block';
    });
    
    loadQuestion();
});
