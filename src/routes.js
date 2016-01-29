"use strict";

var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var App = require('./components/app');

//if you don't include a path, the path will be the same as the name
var routes = (
    <Route path="/" component={App} />
);

module.exports = routes;