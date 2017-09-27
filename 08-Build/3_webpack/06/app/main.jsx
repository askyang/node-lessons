"use strict";

const React = require('react');
const ReactDOM = require('react-dom');

let AppComponent = require('./AppComponent.jsx');
ReactDOM.render(
    <AppComponent/>,
    document.querySelector('section')
);