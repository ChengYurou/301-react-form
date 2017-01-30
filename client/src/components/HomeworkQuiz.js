import React from 'react';
import {Component} from 'react';
import '../../style/index.less';

export default class HomeworkQuiz extends Component {

  removeHomeworkQuiz(sectionIndex, homeworkQuizIndex) {
    const data = {sectionIndex, homeworkQuizIndex};
    this.props.onRemoveHomeworkQuiz(data);
  }

  render() {
    const homeworkId = this.props.id;
    const {sectionIndex, homeworkQuizIndex} = this.props;
    return (
          <div className='col-sm-2'>
            <div className='homework-title'>
              <h4 className='title-header no-margin'>
                <span>{homeworkId}</span>
                <i className='fa fa-times pull-right'
                   onClick={this.removeHomeworkQuiz.bind(this, sectionIndex, homeworkQuizIndex)}> </i>
              </h4>
            </div>
          </div>
    );
  }
}
