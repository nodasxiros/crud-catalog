import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="links">
      <NavLink to="/" className="link" activeClassName="active" exact>
        All Beers
      </NavLink>
      <NavLink to="/create" className="link" activeClassName="active">
        Add a Beer
      </NavLink>
    </div>
  );
}

export default Header;
