import {connect} from 'react-redux';
import PaperInfo from '../components/PaperInfo';

const mapStateToProps = ({paperInfo}) => {
  return {
    paperName: paperInfo.paperName,
    description: paperInfo.description
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editPaper: (data) => {
      dispatch({type: 'EDIT_PAPER', data});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaperInfo);
