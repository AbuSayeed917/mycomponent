import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="brand">
        <h1>BrunelFitness</h1>
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`menu-list ${isMenuOpen ? 'show' : ''}`}>
          <li><Link to="/">Goals</Link></li>
          <li><Link to="/DietAndWorkoutPlan">Diet and Workout</Link></li>
          <li><Link to="/health-services">Health Services</Link></li>
          <li><Link to="/">Progress Tracker</Link></li>
          <li><a href="https://www.nhs.uk/live-well/" target="_blank" rel="noopener noreferrer">Resources</a></li>
          <li><Link to="/bmi-calculator">BMI & Diet Plan</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
