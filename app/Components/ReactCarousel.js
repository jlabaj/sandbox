/**
 * Created by Jakub Labaj on 15. 11. 2015.
 */

var React = require('react/addons');

if (typeof window !== 'undefined') {
    window.React = React;
}

var divStyle = {
  color: 'green',
  //backgroundImage: 'url(' + imgUrl + ')',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

var ReactCarousel = React.createClass({

    componentDidMount: function () {
        //console.log(fakeData);

    },
    render: function () {
        return (

        //<section id="carouselSection">

          <section className="container">
            <div id="carousel">
              <figure>Node.js</figure>
              <figure>React</figure>
              <figure>Webpack</figure>
              <figure>Babel</figure>
              <figure>Express.js</figure>
              <figure>modernizr</figure>
              <figure>EJS templating</figure>
              <figure>PostCSS</figure>
              <figure>CSS3 3D Transforms</figure>
              <figure>Git</figure>
              <figure>Atom</figure>
              <figure>12</figure>
              <figure>13</figure>
              <figure>14</figure>
              <figure>15</figure>
              <figure>16</figure>
              <figure>17</figure>
              <figure>18</figure>
              <figure>19</figure>
              <figure>20</figure>
            </div>
          </section>

            // <section id="options">
            //   <p>
            //     <label for="panel-count">panels</label>
            //     <input type="range" id="panel-count" value="11" min="3" max="20" />
            //   </p>
            //
            //   <p id="navigation">
            //     <button id="previous" data-increment="-1">Previous</button>
            //     <button id="next" data-increment="1">Next</button>
            //   </p>
            //
            //   <p>
            //     <button id="toggle-axis">Toggle Carousel Axis</button>
            //   </p>
            //
            //   <p>
            //     <button id="toggle-backface-visibility">Toggle Backface Visibility</button>
            //   </p>
            //
            // </section>

          //</section>

        )
    }
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactCarousel;
