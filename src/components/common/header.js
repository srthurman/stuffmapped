"use strict";

var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <div>
                <header className="container-fluid">
                    <div id="menu" className="navbar navbar-default navbar-fixed-top">
                        <div className="navbar-header">
                            <button className="btn btn-success btn-sm navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span className="glyphicon glyphicon-chevron-down"></span></button>
                            <div id="logo">
                                <a href="."><h4>Stuffmapped</h4></a>
                            </div>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="nav active"><a href=".">Home</a></li>
                                <li className="nav"><a href="about.html">About</a></li>
                                <li className="nav"><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
});

module.exports = Header;