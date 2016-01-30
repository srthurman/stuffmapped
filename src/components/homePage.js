"use strict";

var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <div id="header"></div>
                <section id="body" className="container">
                    <div className="page-header">
                        <ol className="breadcrumb">
                            <li  className="active">Home</li>
                        </ol>
                        <h1>Main Section</h1>
                        <p className="text-muted">Here's a subheader</p>
                    </div>
                    <section id="main">
                        <p className="lead">Here's my main section. hop chuck turducken. Pork belly shankle spare ribs bacon andouille pancetta ground round short loin, cow t-bone flank ribeye tail. Pork belly turducken picanha, cupim ball tip t-bone kielbasa beef ribs shankle. Pork loin turkey tri-tip, andouille frankfurter shankle pork belly boudin picanha. Spare ribs jowl hamburger venison bacon pork belly turkey.</p> 
                        <p>Here's my main section. hop chuck turducken. Pork belly shankle spare ribs bacon andouille pancetta ground round short loin, cow t-bone flank ribeye tail. Pork belly turducken picanha, cupim ball tip t-bone kielbasa beef ribs shankle. Pork loin turkey tri-tip, andouille frankfurter shankle pork belly boudin picanha. Spare ribs jowl hamburger venison bacon pork belly turkey.</p> 
                    </section>
                </section>
            </div>
        );
    }
});

module.exports = Home;