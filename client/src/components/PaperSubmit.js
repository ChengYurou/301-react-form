import React from 'react';
import {Component} from 'react';
import '../../style/index.less';
import {Modal, Button} from 'react-bootstrap';

export default class PaperSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: 'hidden'
    }
  }

  checkPaperNameAndDesc() {
    const paperData = this.props.data;

    if (paperData.name && paperData.name.length > 32) {
      return '试卷名称过长';
    } else if (paperData.description && paperData.description.length > 265) {
      return '试卷描述过长';
    } else if (!paperData.name) {
      return '试卷名称不能为空';
    }
    return '';
  }

  confirmButton() {
    this.setState({showModal: 'hidden'});
  }

  savePaper() {
    const message = this.checkPaperNameAndDesc();
    if (message.length > 0) {
      this.setState({showModal: '', message: message})
    }
  }

  submitPaper() {
    const message = this.checkPaperNameAndDesc();
    if (message.length > 0) {
      this.setState({showModal: '', message: message})
    }
  }

  render() {
    return (
        <div id="paper-submit" className="row">
          <div className='col-sm-5 col-sm-offset-1 text-right'>
            <button className='btn btn-primary btn-size'
                    onClick={this.savePaper.bind(this)}>保存
            </button>
          </div>
          <div className='col-sm-5 text-left'>
            <button className='btn btn-primary btn-size'
                    onClick={this.submitPaper.bind(this)}>发布
            </button>
          </div>

          <div className={this.state.showModal}>
            <div className='static-modal'>
              <Modal.Dialog>
                <Modal.Body>
                  {this.state.message}
                </Modal.Body>

                <Modal.Footer>
                  <Button bsStyle='primary' onClick={this.confirmButton.bind(this)}>确定</Button>
                </Modal.Footer>

              </Modal.Dialog>
            </div>
          </div>
        </div>
    );
  }
}
