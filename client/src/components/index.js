import React from 'react';
import {Component} from 'react';
import '../../style/index.less';
import PaperInfo from '../containers/PaperInfo'

export default class PaperEditor extends Component {
  render() {
    return (
        <div id="Paper">
          <p className="paper-header">新建试卷</p>
          <PaperInfo/>
      </div>
    );
  }
}
