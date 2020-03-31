import React from 'react';
import './App.css';
import Card from './components/Card'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      periods: []
    };
  }
  
  componentDidMount() {
    fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
    .then(res => res.json())
    .then((result) => {
      let periods = result.properties.periods;   
      this.setState({
        periods: periods
      });
    })
    .catch((error) => {console.log(error)} );

  }

  render() {
    return(
      <div>
        {this.state.periods.map((value, index) => {
          return <Card key = {index} title = {value.name}>
            <h2>
              {value.temperature}
              {value.temperatureUnit}
            </h2>
            <p>
              {value.detailedForecast}
            </p>
          </Card>
          })
        }
      </div>
    )
  }
}

export default App;
