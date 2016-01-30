/*eslint-disable strict*/ //Disabling check b/c we need the jQuery global var - can't run in strict mode

var React = require('react');
var Header = require('./common/header.js');
var Footer = require('./common/footer.js');
// var Home = require('./common/homePage.js');
$ = jQuery = require('jquery'); // Need to declare jquery globally b/c bootstrap expects it to be there
//declare it twice means you can use either $ or jQuery

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
});

module.exports = App;