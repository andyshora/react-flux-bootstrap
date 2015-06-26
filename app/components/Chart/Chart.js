// import d3Chart from '../D3Chart/D3Chart';
import React from 'react';
// import ChartActions from '../../actions/ChartActions';


let sampleData = [
  { id: '5fbmzmtc', x: 7, y: 41, z: 6 },
  { id: 's4f8phwm', x: 11, y: 45, z: 9 }
];

if (process.env.BROWSER) {
  require('./_Chart.scss');
}

let chart = class Chart extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.state);

    // let dispatcher = null;
  }

  getInitialState() {
    return {
      data: sampleData,
      domain: {x: [0, 30], y: [0, 100]}
    };
  }

  render() {
    return (
      <div className="Chart"></div>
    );
  }


};

export default chart;
