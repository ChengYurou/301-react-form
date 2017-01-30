import {connect} from 'react-redux';
import LogicPuzzle from '../components/LogicPuzzle';

function getToggle(paperInfo) {
  return paperInfo.sections.filter((item) => {
        return item.type === 'logicQuiz';
      }).length > 0;
}

function getQuizzes(paperInfo) {
  let result = paperInfo.sections.filter((item) => {
        return item.type === 'logicQuiz';
      })[0] || {};

  return result.definition || {};
}
const mapStateToProps = ({paperInfo}) => ({
  toggleStatus: getToggle(paperInfo),
  definition: getQuizzes(paperInfo)
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateLogicPuzzle: (data) => {
      dispatch({type: 'UPDATE_LOGIC_PUZZLE', data});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogicPuzzle);
