//main.js

var React = require('react');
var ReactDOM = require('react-dom');
var render = ReactDOM.render;

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var routes = require('./routes');

//render(<Header/>, document.getElementById('header'));
//render(<TestComponent/>, document.getElementById('map'));
//render(<Footer/>, document.getElementById('footer'));

render((<Router>{routes}</Router>), document.getElementById('app'));