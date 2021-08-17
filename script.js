const questionsArrowsAnswers = document.querySelectorAll(
  ".question-arrow-answer"
);

questionsArrowsAnswers.forEach((questionAndAnswer) => {
  questionAndAnswer.addEventListener("click", () => {
    const questionAndArrow = questionAndAnswer.children[0];
    const answer = questionAndAnswer.children[1];
    const arrow = questionAndAnswer.children[0].children[1];
    const elements = [questionAndArrow, answer, arrow];

    questionsArrowsAnswers.forEach((questionAndAnswer) => {
      const questionAndArrow = questionAndAnswer.children[0];
      const answer = questionAndAnswer.children[1];
      const arrow = questionAndAnswer.children[0].children[1];
      const elements = [questionAndArrow, answer, arrow];

      elements.forEach((el) => {
        el.classList.remove("active");
      });
    });
    elements.forEach((el) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      } else {
        el.classList.add("active");
      }
    });
  });
});
