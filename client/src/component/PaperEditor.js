import React from 'react'
import {Component} from 'react';
import '../../style/index.less';

export default class PaperEditor extends Component {
  render() {
    return (
        <div id="Paper">
          <p className="paper-header">新建试卷</p>
          <div id="paper-info">
            <div className="row form-group">
              <label className="col-sm-3 control-label" for="paperName">试卷名称</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="paperName"/>
              </div>

            </div>
            <div className="row form-group">
              <label className="col-sm-3 control-label" for="paperInfo">试卷描述</label>
              <div className="col-sm-6">
                <textarea type="text" className="form-control"></textarea>
              </div>
            </div>
          </div>

          <div id="paper-checkbox">
            <div className="row">
              <label className="col-sm-3 text-right">逻辑题</label>
              <div className="col-sm-6">
                <input type="checkbox"/>
              </div>
            </div>
            <div className="row col-sm-offset-3 form-inline">
              <div className="col-sm-2 form-group">
                <label for="easy">简单</label>
                <input type="number" className="form-control level-input" id="easy"/>
              </div>
              <div className="col-sm-2 form-group">
                <label for="normal">一般</label>
                <input type="number" className="form-control level-input" id="normal"/>
              </div>
              <div className="col-sm-2 form-group">
                <label for="hard">困难</label>
                <input type="number" className="form-control level-input" id="hard"/>
              </div>
            </div>
          </div>

          <div id='paper-section'>
            <div className='split-border'></div>
            <div className="row">
              <div className='col-sm-offset-1 col-sm-10 no-padding'>
                <div className="section-header">
                  <div className='section-title col-sm-6 row'>
                    <div className='col-sm-3 no-padding '>
                      <input type='text' className="form-control"/>
                    </div>
                    <div className='col-sm-1'>
                      <i className="fa fa-pencil-square-o"> </i>
                    </div>
                  </div>
                  <div className='section-toolbar'>
                    <i className='fa fa-trash-o white'> </i>
                  </div>
                </div>

                <div className='homework-border row'>
                  <div className='add-homework'>
                    <div className='col-sm-2'>
                      <i className='fa fa-plus'></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-offset-1 col-sm-10 no-padding">
                <div className='text-center add-section'>
                  <i className='fa fa-plus'> </i>
                </div>
              </div>
            </div>
          </div>

          <div id="paper-submit" className="row">
            <div className='col-sm-5 col-sm-offset-1 text-right'>
              <button className='btn btn-primary btn-size'>保存</button>
            </div>
            <div className='col-sm-5 text-left'>
              <button className='btn btn-primary btn-size'>发布</button>
            </div>
          </div>
        </div>
    );
  }
}
