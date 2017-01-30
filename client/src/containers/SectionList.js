import {connect} from 'react-redux';
import SectionList from '../components/SectionList';

const mapStateToProps = ({paperInfo}) => {
  let sections;

  if (paperInfo.sections) {
    sections = paperInfo.sections.filter(section => section.type === 'homeworkQuiz');
  }
  return {sections};
};

export default connect(mapStateToProps, () => {
  return {};
})(SectionList);
