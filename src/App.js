import React, { Component } from 'react';
import './App.css';
import { Line } from 'react-chartjs-2';

class App extends Component {
  render() {
    const data = {
      labels: [
        '10/04/2018', '10/05/2018', '10/06/2018', '10/07/2018', '10/08/2018', '10/09/2018', '10/10/2018', '10/11/2018', '10/12/2018', '10/13/2018', '10/14/2018', '10/15/2018'
      ],
      datasets: [
        {
          label: 'Temperature',
          fill: false,
          data: [22,19,27,23,22,24,17,25,23,24,20,19]
        }
      ]
    }

    const options = {
      responsive: true,
      maintainAspectRatio: false
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Responsive Linear chart using Chart.js</h1>
        </header>
        <article className="canvas-container">
          <Line className="linear-graph" data={data} options={options}/>
        </article>
      </div>
    );
  }
}

export default App;