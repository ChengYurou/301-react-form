import {connect} from 'react-redux';
import SectionName from '../components/SectionName';

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTitle: (sectionName, sectionIndex) => {
      let data = {sectionName, sectionIndex};
      dispatch({type: 'EDIT_SECTION_NAME', data});
    },
    onDeleteSection: (data) => {
      dispatch({type: 'DELETE_SECTION', data});
    }
  };
};

export default connect(() => {
  return {};
}, mapDispatchToProps)(SectionName);
