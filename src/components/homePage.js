"use strict";

var React = require('react');
var Map = require('./map/map.js');

var Home = React.createClass({
    render: function() {
        return (
            <div>
                    <div className="page-header">
                        <h1>Main Section</h1>
                        <p className="text-muted">Here's a subheader</p>
                    </div>
                    <section id="main">
                        <Map/>
                    </section>
            </div>
        );
    }
});

module.exports = Home;