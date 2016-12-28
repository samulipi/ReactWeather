var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return(
    <div>
      <h1>Weather is {temp} C !</h1>
      <p>In {location}</p>
    </div>
  )
}

module.exports = WeatherMessage;
