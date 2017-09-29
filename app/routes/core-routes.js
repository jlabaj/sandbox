/**
 * Created by Jakub Labaj on 15. 11. 2015.
 */

var React = require('react/addons');
var ReactApp = React.createFactory(require('../Components/ReactApp'));
var ReactCarousel = React.createFactory(require('../Components/ReactCarousel'));
var express = require('express');
var path = require('path');

if (typeof window !== 'undefined') {
    window.React = React;
}


//var reactHtml = React.renderToString(ReactApp({}));

//app.render('index.ejs', {reactOutput: reactHtml});

module.exports = function(app) {

    app.get('/', function(req, res){
        // React.renderToString takes your component
        // and generates the markup
        var reactHtml = React.renderToString(ReactApp({}));

        var carouselHtml = React.renderToString(ReactCarousel({}));
        // Output html rendered by react
        // console.log(myAppHtml);
        res.render('index.ejs', {reactOutput: reactHtml, carousel: carouselHtml });
        //res.render('index.ejs', {carousel: carouselHtml });


        //res.render('index.ejs', {reactOutput: "blabla"});

        //res.render('../views/index');
    });


    //app.get('js');

    // app.get('/js/main.js', function(req, res){
    //   // React.renderToString takes your component
    //   // and generates the markup
    //   var reactHtml = React.renderToString(ReactApp({}));
    //
    //   var carouselHtml = React.renderToString(ReactCarousel({}));
    //   // Output html rendered by react
    //   // console.log(myAppHtml);
    //   res.render('index.ejs', {reactOutput: reactHtml, carousel: carouselHtml });
    //
    //
    //   //res.render('index.ejs', {reactOutput: "blabla"});
    //
    //   //res.render('../views/index');
    // });

};
