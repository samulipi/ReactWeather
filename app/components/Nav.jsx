var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    alert('not ready');
  },
  render: function(){
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">Kelisovellus</li>
            <li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
          </li>
          <li>
            <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
          </li>
          <li>
            <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
          </li>
        </ul>
      </div>

      <div className="top-bar-right">
        <form onSubmit={this.onSearch}>
          <ul className="menu">
            <li>
            <input type="search" placeholder="Hae"></input>
          </li>
            <li>
              <input type="submit" className="button" value="Hae"/>
            </li>
          </ul>

        </form>
      </div>

    </div>
  );
}
});

module.exports = Nav;
