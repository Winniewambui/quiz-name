// const questions = document.querySelectorAll('#question');

// questions.forEach(questionContainer => {
//     const answer = questionContainer.querySelector('.question-text');
//     const button = questionContainer.querySelector('.quiz-btn');

//     button.addEventListener('click', function () {
//         answer.classList.toggle('active');
//         button.querySelector('.plus-icon').classList.add('hide');
//         button.querySelector('.minus-icon').classList.add('show');

//     });
// });

// const questions = document.querySelectorAll('#question');


const questions = document.querySelectorAll('#question');

questions.forEach(questionContainer => {
  const answer = questionContainer.querySelector('.question-text');
  const button = questionContainer.querySelector('.quiz-btn');
  const plusIcon = button.querySelector('.plus-icon');
  const minusIcon = button.querySelector('.minus-icon');

  button.addEventListener('click', function () {
    const isActive = answer.classList.contains('active');

    questions.forEach(question => {
      const questionAnswer = question.querySelector('.question-text');
      const questionButton = question.querySelector('.quiz-btn');
      const questionPlusIcon = questionButton.querySelector('.plus-icon');
      const questionMinusIcon = questionButton.querySelector('.minus-icon');

      questionAnswer.classList.remove('active');
      questionPlusIcon.classList.remove('hide');
      questionMinusIcon.classList.remove('show');
    });

    if (!isActive) {
      answer.classList.add('active');
      plusIcon.classList.add('hide');
      minusIcon.classList.add('show');
    }
  });
});