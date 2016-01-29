//main.js

var React = require('react');
var ReactDOM = require('react-dom');
var render = ReactDOM.render;

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


var Header = require('./components/common/header');
var Footer = require('./components/common/footer');
var TestComponent = require('./components/map/test');

//render(<Header/>, document.getElementById('header'));
//render(<TestComponent/>, document.getElementById('map'));
//render(<Footer/>, document.getElementById('footer'));

render((<Router>
            <Route path="/" component={TestComponent} />
        </Router>), document.getElementById('footer'))