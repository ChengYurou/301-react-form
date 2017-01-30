import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import '../style/index.less';
import PaperEditor from './PaperEditor'

render(
    <PaperEditor/>,
    document.getElementById('app'));