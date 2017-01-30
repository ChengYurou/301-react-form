import {connect} from 'react-redux';
import HomeworkQuiz from '../components/HomeworkQuiz';

function mapDispatchToProps(dispatch) {
  return {
    onRemoveHomeworkQuiz: (data) => {
      dispatch({type: 'REMOVE_HOMEWORK_QUIZ', data});
    }
  };
}

export default connect(() => {
  return {};
}, mapDispatchToProps)(HomeworkQuiz);
