import React from 'react';

if (process.env.BROWSER) {
  require('./_AboutSection.scss');
}

let aboutSection = class AboutSection extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="about-page">
        <h1>About Page</h1>
        <p>Lorem ipsum Enim Excepteur in incididunt elit enim est tempor incididunt sit nostrud Duis non adipisicing in voluptate.</p>
      </div>
    );
  }

};

export default aboutSection;
