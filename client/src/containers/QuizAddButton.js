import QuizeAddButton from '../components/QuizAddButton';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    editHomework: (quizzes) => {
      dispatch({
        type: 'EDIT_HOMEWORK',
        data: quizzes
      });
    }
  };
};

export default connect(() => {
  return {};
}, mapDispatchToProps)(QuizeAddButton);
