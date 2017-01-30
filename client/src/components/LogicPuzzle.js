import React from 'react';
import {Component} from 'react';
import '../../style/index.less'

const DifficultySetter = ({text, difficulty, content}) => (
    <div className='col-sm-2 form-group'>
      <label >{text}</label>
      <input type='number' className='level-input form-control' ref={(ref) => {
        content[difficulty] = ref;
      }} onBlur={content.handleUpdate.bind(content)}/>
    </div>
);

const labels = [
  {
    text: '简单',
    difficulty: 'easy'
  },
  {
    text: '一般',
    difficulty: 'normal'
  },
  {
    text: '困难',
    difficulty: 'hard'
  }
];

export default class LogicPuzzle extends Component {
  handleUpdate() {
    let quizzes;
    if (this.inputInfo.checked) {
      quizzes = {
        easy: parseInt(this.easy.value) || 0,
        normal: parseInt(this.normal.value) || 0,
        hard: parseInt(this.hard.value) || 0
      };
    }
    this.props.updateLogicPuzzle({quizzes});
  }

  componentDidUpdate() {
    this.inputInfo.checked = this.props.toggleStatus;
    this.easy.value = this.props.quizzes.easy || '';
    this.normal.value = this.props.quizzes.normal || '';
    this.hard.value = this.props.quizzes.hard || '';
  }

  render() {
    return (
        <div id='paper-checkbox'>
          <div className='row'>
            <label className='col-sm-3 text-right'>
              逻辑题
            </label>
            <div className='col-sm-6'>
              <input type='checkbox'
                     ref={(ref) => {
                       this.inputInfo = ref;
                     }}
                     onChange={this.handleUpdate.bind(this)}/>
            </div>
          </div>
          <div className='row col-sm-offset-3 form-inline'>
            {labels.map((label, index) => (
                <DifficultySetter key={index} {...label} content={this} disabled={!this.props.toggleStatus}/>)) }
          </div>
        </div>
    );
  }
}
