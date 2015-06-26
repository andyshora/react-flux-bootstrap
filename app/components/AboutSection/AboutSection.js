import React from 'react';
import _ from 'lodash';
import Chart from '../Chart/Chart';

if (process.env.BROWSER) {
  require('./_AboutSection.scss');
}

let aboutSection = class AboutSection extends React.Component {
  constructor() {
    super();

    this._allData = [];
    this.data = [];
    this.domain = { x: [0, 30], y: [0, 100] };
  }


  isInDomain(domain, d) {
    return d.x >= domain[0] && d.x <= domain[1];
  }

  getData(domain) {
    return _.filter(this._allData, this.isInDomain.bind(null, domain));
  }

  render() {

    console.log('state', this.state);

    return (
      <div className="about-page">
        <h1>About Page</h1>
        <p>Lorem ipsum Enim Excepteur in incididunt elit enim est tempor incididunt sit nostrud Duis non adipisicing in voluptate.</p>
        <Chart
          data={this.data}
          domain={this.domain} />
      </div>
    );
  }

};

export default aboutSection;
