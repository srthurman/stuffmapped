"use strict";

var React = require('react');

var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('./components/app');
var Home = require('./components/homePage.js');
var About = require('./components/about/aboutPage.js');

//if you don't include a path, the path will be the same as the name
var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About} />
    </Route>
);

module.exports = routes;