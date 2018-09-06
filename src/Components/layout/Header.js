import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Header = (props) => {
   const { branding } = props;
      return (
         <nav className="navbar navbar-expand-sm bg-danger navbar-dark mb-3 py0">
            <div className="container">
               <a href="/" className="navbar-brand">{branding}</a>
               <div>
                  <ul className="navbar-nav mr-auto px-2">
                     <li className="nav-item">
                        <Link to="/" className="nav-link">
                           <i className="fas fa-home"></i> Home
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/contact/add" className="nav-link">
                           <i className="fas fa-plus"></i> Add
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/about" className="nav-link">
                           <i className="fas fa-question"></i> About
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      );
}


Header.defaultProps = {
   branding: "my app"
};

Header.propTypes = {
   branding: propTypes.string.isRequired
};

export default Header;
