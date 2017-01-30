import React from 'react';
import {Component} from 'react';
import '../../style/index.less'

export default class SectionAddButton extends Component {

  showSection() {
    const section = {quizzes: [], title: '编程题', type: 'homeworkQuiz'};
    this.props.handleSectionList(section);
  }

  render() {
    return (
        <div id='paper-section'>
          <div className="row">
            <div className='col-sm-offset-1 col-sm-10 no-padding'>
              <div className='add-section text-center'>
                <i className='fa fa-plus' onClick={this.showSection.bind(this)}> </i>
              </div>
            </div>
          </div>
        </div>
    );
  }
}