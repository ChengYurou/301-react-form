const updateLogicPuzzle = (data, {definition}) => {
  let definitionIndex = 0;
  let count = 0;

  for (let i = 0; i < data.sections.length; i++) {
    if (data.sections[i].type === 'logicQuiz') {
      definitionIndex = i;
      count = 1;
      break;
    }
  }
  let newSection = definition ? {
    definition: definition,
    type: 'logicQuiz',
  } : undefined;

  data.sections.splice(definitionIndex, count, newSection);

  let result = Object.assign({}, data, {
    sections: data.sections.filter((item) => {
      return item !== undefined;
    })
  });
  return result;
};

export default updateLogicPuzzle;
