import editPaper from './editPaper';
import updateLogicPuzzle from './updateLogicPuzzle';
import addSection from './addSection'

const actionMap = {
  'EDIT_PAPER' : editPaper,
  'UPDATE_LOGIC_PUZZLE': updateLogicPuzzle,
  'ADD_SECTION': addSection,
};

function paperInfo(state = {sections: []}, action) {
  const func = actionMap[action.type];
  if(!func) {
    return state;
  }

  return func(state,action.data);
}
export default paperInfo;