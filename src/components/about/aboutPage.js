"use strict";

var React = require('react');

var About = React.createClass({
  render: function() {
      return (
                <div>
                    <div className="page-header">
                        <h1>About</h1>
                    </div>
                        <p> This application uses the following technologies:
                            <ul>
                                <li>React</li>
                                <li>React Router</li>
                                <li>Flux</li>
                                <li>Browserify</li>
                                <li>Node</li>
                            </ul>
                        </p>
                </div>
      
      );
  }
});

module.exports = About;