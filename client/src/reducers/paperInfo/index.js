import editPaper from './editPaper';
import updateLogicPuzzle from './updateLogicPuzzle';

const actionMap = {
  'EDIT_PAPER' : editPaper,
  'UPDATE_LOGIC_PUZZLE': updateLogicPuzzle
};

function paperInfo(state = {sections: []}, action) {
  const func = actionMap[action.type];
  if(!func) {
    return state;
  }

  return func(state,action.data);
}
export default paperInfo;