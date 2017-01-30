const editHomework = (data, newQuizzes) => {
  let newData = Object.assign({}, data);
  const sectionIndex = newQuizzes.sectionIndex;
  let rowSection = newData.sections.filter(section => section.type === 'homeworkQuiz');
  let quizzes = rowSection[sectionIndex].definition.quizzes.concat(newQuizzes.quizzes);
  rowSection[sectionIndex].definition.quizzes = quizzes;
  return newData;
};

export default editHomework;
