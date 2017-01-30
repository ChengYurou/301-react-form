import {connect} from 'react-redux';
import PaperSubmit from '../components/PaperSubmit';

const mapStateToProps = ({paperInfo}) => {
  return {data: paperInfo};
};

const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(PaperSubmit);
