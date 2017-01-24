import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import '../style/index.less';
import PaperEditor from './component/PaperEditor'

render(
    <PaperEditor/>,
    document.getElementById('app'));