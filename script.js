const questions = document.querySelectorAll('#question');

questions.forEach(questionContainer => {
    const answer = questionContainer.querySelector('.question-text');
    const button = questionContainer.querySelector('.quiz-btn');

    button.addEventListener('click', function () {
        answer.classList.toggle('active');
        button.querySelector('.plus-icon').classList.add('hide');
        button.querySelector('.minus-icon').classList.add('show');
    });
});


