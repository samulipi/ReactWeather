var React = require('react');

var About = (props) => {
  return (
    <div>
        <h3>About</h3>
          <div className="success callout" data-closable>
            <h5>This is a callout.</h5>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
            <a href="#">It's dangerous to go alone, take this.</a>
          </div>

        </div>
  )
};

module.exports = About;
