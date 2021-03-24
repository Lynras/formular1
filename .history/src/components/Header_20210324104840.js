import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {
  render() {
    return (
          <header>
          <div className="jumbotron">
            <div class="navbar navbar-expand-lg" >
                <nav className="nav navbar-nav">
                    <Link to='/' className="nav-item nav-link"></Link>
                    <Link to='/DriversList' className="nav-item nav-link">Drivers</Link>
                    <Link to='/RaceList' className="nav-item nav-link">Races</Link>
                    <Link to='/Constructors' className="nav-item nav-link">Races</Link>
                </nav>
            </div>
          </div> 

        </header>
    );
  }
}

export default Header;