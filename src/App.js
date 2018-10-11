import React, { Component } from 'react';
import './App.css';
import { Line } from 'react-chartjs-2';

class App extends Component {
  render() {
    const data = {
      labels: [
        '10/04/2018', '10/05/2018', 
        '10/06/2018', '10/07/2018', 
        '10/08/2018', '10/09/2018', 
        '10/10/2018', '10/11/2018', 
        '10/12/2018', '10/13/2018', 
        '10/14/2018', '10/15/2018'
      ],
      datasets: [
        {
          label: 'Temperature',
          data: [22,19,27,23,22,24,17,25,23,24,20,19],
          fill: false,          // Don't fill area under the line
          borderColor: 'green'  // Line color
        }
      ]
    }

    const options = {
      responsive: true,				    // Make it responsive
      maintainAspectRatio: false  // Don't maintain w/h ratio
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Responsive Linear chart using Chart.js</h1>
        </header>
        <article className="canvas-container">
          <Line data={data} options={options}/>
        </article>
      </div>
    );
  }
}

export default App;