// LIBRARY
import React from 'react';

export default class NotFoundSection extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>PAGE NOT FOUND</h1>
        <p>yes indeed</p>
      </div>
    );
  }
}

NotFoundSection.prototype.displayName = 'NotFoundSection';
