import React from 'react';
import {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../../style/index.less';

const homeworkQuiz = {
  "items": [
    {
      "_id": "12345",
      "title": "react",
      "stack": "Javascript"
    },
    {
      "_id": "12346",
      "title": "jersey",
      "stack": "Java+Gradle"
    }
  ],
  "totalCount": 30
};

const homeworkList = homeworkQuiz.items;

export default class QuizeAddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleClick() {
    this.setState({
      show: true
    });
  }

  hideModal() {
    this.setState({
      show: false
    });
  }

  putHomeworkQuize() {
    this.hideModal();
    let quizzes = [];
    let items = document.getElementsByName('homework');
    items.forEach((item) => {
      if (item.checked) {
        quizzes.push({
          id: item.value
        });
      }
    });

    this.props.editHomework({
      quizzes,
      sectionIndex: this.props.sectionIndex
    });
  }


  render() {
    let homeworkListHTML = homeworkList.map(({_id, stack, title}, index) => {
      return <tr key={index}>
        <th scope='row'>
          <input type='checkbox' name='homework' value={_id}/>
        </th>
        <td> {_id}</td>
        <td> {title}</td>
        <td> {stack}</td>
      </tr>;
    });

    const noResult = <div className='center-block'>没有找到相应的结果</div>;

    return (
        <div className='add-homework'>

          <div className='col-sm-2'>
            <i className='fa fa-plus' onClick={this.handleClick.bind(this)}></i>
          </div>

          <Modal {...this.props}
                 show={this.state.show}>
            <Modal.Header id='contained-modal-title-lg'>
              <Modal.Title>
                <div className='inline-title'>
                  <label className='col-sm-3'>试卷列表</label>
                </div>
                <i className='fa fa-times pull-right' id='red' onClick={this.hideModal.bind(this)}></i>
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              { this.state.show && homeworkQuiz.totalCount !== 0
                  ? <div>
                <table className='table table-striped table-bordered table-hover'>
                  <thead>
                  <tr className='form-title'>
                    <th></th>
                    <th className='sorting'> 题目名称</th>
                    <th className='sorting'> 题目内容</th>
                    <th className='sorting'> 技术栈</th>
                  </tr>
                  </thead>
                  <tbody>
                  {homeworkListHTML}
                  </tbody>
                </table>

              </div>
                  : noResult}

            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.putHomeworkQuize.bind(this)}>确定</Button>
            </Modal.Footer>
          </Modal>

        </div>
    );
  }
}
