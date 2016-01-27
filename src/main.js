//main.js

var React = require('react');
var Header = require('./components/common/header');
var Footer = require('./components/common/footer');
var TestComponent = require('./components/map/test');

React.render(<Header/>, document.getElementById('header'));
React.render(<TestComponent/>, document.getElementById('map'));
React.render(<Footer/>, document.getElementById('footer'));