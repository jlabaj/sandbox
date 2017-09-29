/**
 * Created by Jakub Labaj on 15. 11. 2015.
 */

var React = require('react/addons');

if (typeof window !== 'undefined') {
    window.React = React;
}

/* create factory with griddle component */
//var Griddle = React.createFactory(require('griddle-react'));

//var fakeData = require('../data/fakeData.js').fakeData;
//var columnMeta = require('../data/columnMeta.js').columnMeta;
//var resultsPerPage = 200;



var ReactApp = React.createClass({

    componentDidMount: function () {
        //console.log(fakeData);

    },
    render: function () {
        return (
            <div id="top-component">

            this is the react rendered top component

            </div>
        )
    }
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;
