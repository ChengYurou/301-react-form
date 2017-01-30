import React from 'react';
import {Component} from 'react';
import '../../style/index.less';
import PaperInfo from '../containers/PaperInfo';
import LogicPuzzle from '../containers/LogicPuzzle';
import SectionList from '../containers/SectionList';
import SectionAddButton from '../containers/SectionAddButton';
import PaperSubmit from '../containers/PaperSubmit'

export default class PaperEditor extends Component {
  render() {
    return (
        <div id="Paper">
          <p className="paper-header">新建试卷</p>
          <PaperInfo/>
          <LogicPuzzle/>
          <SectionList/>
          <SectionAddButton/>
          <PaperSubmit/>
      </div>
    );
  }
}
