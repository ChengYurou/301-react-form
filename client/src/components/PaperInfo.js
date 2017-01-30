import React from 'react';
import {Component} from 'react';
import '../../style/index.less'

export default class PaperInfo extends Component {
  editPaperName() {
    this.props.editPaper({paperName: this.paperName.value});
  }

  editDescription() {
    this.props.editPaper({description: this.description.value});
  }

  receivePropsData() {
    this.paperName.value = this.props.paperName || '';
    this.description.value = this.props.description || '';
  }

  componentDidMount() {
    this.receivePropsData();
  }

  componentDidUpdate() {
    this.receivePropsData();
  }

  render() {
    return (
        <div id="paper-info">
          <div className="row form-group">
            <label className="col-sm-3 control-label">试卷名称</label>
            <div className="col-sm-6">
              <input type="text" className="form-control"
              ref = {(ref) => {
                this.paperName = ref;
              }} onBlur={this.editPaperName.bind(this)}/>
            </div>

          </div>
          <div className="row form-group">
            <label className="col-sm-3 control-label">试卷描述</label>
            <div className="col-sm-6">
              <textarea type="text" className="form-control"
              ref={(ref) => {
                this.description = ref;
              }} onBlur={this.editDescription.bind(this)}></textarea>
            </div>
          </div>
        </div>
    );
  }
}
