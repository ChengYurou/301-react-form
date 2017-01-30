import React from 'react';
import {Component} from 'react';
import '../../style/index.less'
import {Modal, Button} from 'react-bootstrap';

export default class SectionName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      writable: false,
      showModal: 'hidden'
    };
  }

  componentDidMount() {
    this.title.value = this.props.title;
  }

  addTitle() {
    this.setState({
      writable: false
    });
    this.props.onAddTitle(this.title.value, this.props.sectionIndex);
  }

  editTitle() {
    this.setState({
      writable: true
    });
  }

  closeBody() {
    this.setState({
      showModal: ''
    });
  }

  cancelButton() {
    this.setState({
      showModal: 'hidden'
    });
  }

  confirmButton() {
    this.props.onDeleteSection(this.props.sectionIndex);
    this.setState({
      showModal: 'hidden'
    });
  }

  render() {
    return (
        <div>

          <div className="section-header">
            <div className='section-title col-sm-6 row'>
              <div className='col-sm-3 no-padding '>
                <input type='text'
                       ref={(ref) => {
                         this.title = ref;
                       }}
                       className={this.state.writable ? 'input-header form-control' : 'input-header form-control read-only'}
                       readOnly={this.state.writable ? '' : 'readOnly'}
                       onBlur={this.state.writable ? this.addTitle.bind(this) : ''}
                />
              </div>
              <div className='col-sm-1'>
                <i className={this.state.writable ? 'hidden' : 'fa fa-pencil-square-o'}
                   onClick={this.editTitle.bind(this)}>
                </i>
              </div>
            </div>

            <div className='section-toolbar'>
              <i className='fa fa-trash-o white' onClick={this.closeBody.bind(this)}> </i>
            </div>
          </div>

          <div className={this.state.showModal}>
            <div className='static-modal'>
              <Modal.Dialog>
                <Modal.Header>
                  <Modal.Title>删除提示</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  您确定要删除吗？
                </Modal.Body>

                <Modal.Footer>
                  <Button onClick={this.cancelButton.bind(this)}>取消</Button>
                  <Button bsStyle='primary' onClick={this.confirmButton.bind(this)}>确定</Button>
                </Modal.Footer>

              </Modal.Dialog>
            </div>
          </div>
        </div>

    );
  }
}
