var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return(
    <div>
      <h1 className="text-center">Weather is {temp} C in {location}</h1>
    </div>
  )
}

module.exports = WeatherMessage;
