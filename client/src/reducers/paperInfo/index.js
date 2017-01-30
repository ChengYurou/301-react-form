import editPaper from './editPaper';
import updateLogicPuzzle from './updateLogicPuzzle';
import addSection from './addSection';
import modifySectionName from './modifySectionName';
import deleteSection from './deleteSection';
import editHomework from './editHomework';
import removeHomeworkQuiz from './removeHomeworkQuiz';

const actionMap = {
  'EDIT_PAPER' : editPaper,
  'UPDATE_LOGIC_PUZZLE': updateLogicPuzzle,
  'ADD_SECTION': addSection,
  'EDIT_SECTION_NAME': modifySectionName,
  'DELETE_SECTION': deleteSection,
  'EDIT_HOMEWORK': editHomework,
  'REMOVE_HOMEWORK_QUIZ': removeHomeworkQuiz
};

function paperInfo(state = {sections: []}, action) {
  const func = actionMap[action.type];
  if(!func) {
    return state;
  }

  return func(state,action.data);
}
export default paperInfo;