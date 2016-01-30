"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = React.createClass({
    render: function() {
        return (
            <div>
                <header className="container-fluid">
                    <div id="menu" className="navbar navbar-default navbar-fixed-top">
                        <div className="navbar-header">
                            <button className="btn btn-success btn-sm navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span className="glyphicon glyphicon-chevron-down"></span></button>
                            <div id="logo">
                                <Link to="/"><h4>Stuffmapped</h4></Link>
                            </div>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="nav"><Link to="/">Home</Link></li>
                                <li className="nav"><Link to="/about">About</Link></li>
                                <li className="nav"><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
});

module.exports = Header;