import React from 'react';
import {Component} from 'react';
import '../../style/index.less'
import HomeworkQuizzes from './HomeworkQuizzes';
import SectionName from '../containers/SectionName';
import QuizAddButton from '../containers/QuizAddButton';

export default class Section extends Component {

  handleToggleSection(sectionToggle) {
    this.setState({sectionStatus: sectionToggle});
  }

  render() {
    return (
        <div className='col-sm-offset-1 col-sm-10'>
          <SectionName title={this.props.title} sectionIndex={this.props.index}
                       onToggleSction={this.handleToggleSection.bind(this)}/>
          <div className='homework-border row'>
            {/*<HomeworkQuizzes sectionIndex={this.props.index} homeworkQuizzes={this.props.quizzes}/>*/}
            <QuizAddButton sectionIndex={this.props.index}/>
          </div>
        </div>
    );
  }
}

