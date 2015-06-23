// LIBRARY
import React from 'react';
import { Link } from 'react-router';

let reactLogo = require('./images/react-logo.png');

if (process.env.BROWSER) {
  require('./_Header.scss');
}

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='header'>
        <img src={reactLogo} height='60' />
				<header>
					<ul>
            <li><Link to='app'>Home</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='todo'>Todo</Link></li>
            <li><Link to='contact'>Contact</Link></li>
					</ul>
				</header>
      </div>
    );
  }
}

Header.prototype.displayName = 'Header';
