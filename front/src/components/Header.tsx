import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="links">
      <NavLink to="/" className="link" activeClassName="active" exact>
        Books List
      </NavLink>
      <NavLink to="/add" className="link" activeClassName="active">
        Add Book
      </NavLink>
    </div>
  );
}

export default Header;
