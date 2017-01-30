import {connect} from 'react-redux';
import SectionAddButton from '../components/SectionAddButton';

function mapDispatchToProps(dispatch) {
  return {
    handleSectionList: (data) => {
      dispatch({type: 'ADD_SECTION', data});
    }
  };
}

export default connect(() => {
  return {};
}, mapDispatchToProps)(SectionAddButton);
