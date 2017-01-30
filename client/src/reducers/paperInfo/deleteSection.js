const deleteSection = (data, sectionIndex) => {
  let newData = Object.assign({}, data);

  let newSections = newData.sections.filter(section => section.type === 'homeworkQuiz');
  newSections.splice(sectionIndex, 1);
  newData.sections = newSections;

  return newData;
};

export default deleteSection;
