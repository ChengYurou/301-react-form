import React from 'react';
import {Component} from 'react';
import '../../style/index.less'

export default class PaperSubmit extends Component {
  render() {
    return (
        <div id="paper-submit" className="row">
          <div className='col-sm-5 col-sm-offset-1 text-right'>
            <button className='btn btn-primary btn-size'>保存</button>
          </div>
          <div className='col-sm-5 text-left'>
            <button className='btn btn-primary btn-size'>发布</button>
          </div>
        </div>
    );
  }
}
